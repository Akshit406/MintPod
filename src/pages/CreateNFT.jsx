import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ProgressSteps from '../components/ProgressSteps';
import axios from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import MintFactoryABI from '../abi/MintFactory.json';
import NFTCollectionABI from '../abi/NFTCollection.json';
import { FACTORY_ADDRESS, COLLECTION_BASE_URL } from '../constants/address';

const CreateNFT = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [collections, setCollections] = useState([]);

  // Step 1
  const [collectionName, setCollectionName] = useState('');
  const [symbol, setSymbol] = useState('');

  // Step 2
  const [images, setImages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [fileObj, setFileObj] = useState(null);
  const [desc, setDesc] = useState('');

  // Step 3
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [walletAddress, setWallet] = useState('');

  // Step 4
  const [deploying, setDeploying] = useState(false);
  const [mintLogs, setMintLogs] = useState([]);
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = async () => {
    try {
      const res = await axios.get(API_PATHS.GET_ALL_COLLECTIONS);
      setCollections(res.data.collections || []);
    } catch (err) {
      console.error('Failed to fetch collections', err);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const _provider = new ethers.providers.Web3Provider(window.ethereum);
      const _signer = _provider.getSigner();
      const _walletAddress = await _signer.getAddress();

      setProvider(_provider);
      setSigner(_signer);
      setWallet(_walletAddress);

      console.log("Connected wallet:", _walletAddress);
    } catch (err) {
      console.error("Wallet connection error:", err);
    }
  };

  const next = () => {
    if (step === 1 && (!collectionName || !symbol)) return;
    if (step === 2 && images.length < 5) return;
    setStep(step + 1);
  };

  const prev = () => setStep(step - 1);

  const addImage = () => {
    if (fileObj && desc) {
      setImages([...images, { file: fileObj, description: desc }]);
      setFileObj(null);
      setDesc('');
      setShowForm(false);
    }
  };

  const handleDeployment = async () => {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    console.log("Starting deployment...");
    setDeploying(true);

    try {
      const form = new FormData();
      form.append('collectionName', collectionName);
      form.append('symbol', symbol);
      images.forEach(img => form.append('images', img.file));
      form.append('descriptions', JSON.stringify(images.map(i => i.description)));

      const uploadRes = await axios.post(API_PATHS.UPLOAD_TO_IPFS, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const metadataUrls = uploadRes.data.metadataUrls;
      const coverImage = metadataUrls[0];

      const factory = new ethers.Contract(FACTORY_ADDRESS, MintFactoryABI, signer);
      console.log("Deploying with:", collectionName, symbol, walletAddress);
      const tx = await factory.deployNewCollection(collectionName, symbol);
      await tx.wait();

      const event = await factory.queryFilter(factory.filters.CollectionDeployed());
      const collectionAddress = event[event.length - 1].args.collectionAddress;

      const nftContract = new ethers.Contract(collectionAddress, NFTCollectionABI, signer);
      const logs = [];
      for (let i = 0; i < metadataUrls.length; i++) {
        const mintTx = await nftContract.mintNFT(walletAddress,metadataUrls[i]);
        await mintTx.wait();
        logs.push(`NFT #${i + 1} minted`);
        setMintLogs([...logs]);
      }

      await axios.post(API_PATHS.SAVE_COLLECTION, {
        name: collectionName,
        symbol,
        contractAddress: collectionAddress,
        firstImageUrl: coverImage,
        owner: walletAddress,
      });

      setCollectionData({ collectionAddress });
      fetchCollections();
      setStep(4);
    } catch (err) {
      console.error(err);
      alert('Something went wrong during deployment.');
    }

    setDeploying(false);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Create Your Own NFT Collection in 4 Easy Steps</h2>
        <p className="text-gray-400 mb-8">
          All you need is a few images and a MetaMask wallet. MintPod takes care of the rest.
        </p>
        <Button className="btn-primary glow-effect" onClick={() => setModalOpen(true)}>
          Create Now
        </Button>
      </section>

      <div className="border-t border-gray-800 my-12"></div>

      <section>
        <h3 className="text-2xl font-bold mb-8">Your NFTs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <div key={i} className="nft-card p-4 bg-gray-800 rounded-lg">
              <img src={col.firstImageUrl} alt={col.name} className="rounded-lg h-48 w-full object-cover mb-4" />
              <h4 className="font-medium mb-1">{col.name}</h4>
              <p className="text-sm text-gray-400 mb-3">{col.symbol}</p>
              <a href={`https://testnets.opensea.io/assets/${col.contractAddress}`} target="_blank" rel="noreferrer">
                <Button className="btn-secondary w-full">View Collection</Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/3 p-6 bg-gray-800/50 border-r border-gray-700">
            <ProgressSteps currentStep={step} />
          </div>

          <div className="md:w-2/3 p-6">
            {step === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Collection Info</h3>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Collection Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                    value={collectionName}
                    onChange={e => setCollectionName(e.target.value)}
                    placeholder="My Awesome Collection"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Symbol</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                    value={symbol}
                    maxLength={5}
                    onChange={e => setSymbol(e.target.value.toUpperCase())}
                    placeholder="SYMB"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Upload Images</h3>
                <div className="mb-4">
                  <Button className="btn-secondary" onClick={() => setShowForm(true)}>
                    Add Image
                  </Button>
                </div>
                {showForm && (
                  <div className="mb-4">
                    <input type="file" onChange={e => setFileObj(e.target.files[0])} />
                    <input
                      type="text"
                      value={desc}
                      onChange={e => setDesc(e.target.value)}
                      placeholder="Description"
                      className="block w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2"
                    />
                    <Button className="btn-primary mt-2" onClick={addImage}>
                      Upload
                    </Button>
                  </div>
                )}
                <div className="flex gap-4 overflow-x-auto">
                  {images.map((img, i) => (
                    <div key={i} className="relative w-32 h-32 bg-gray-700 rounded-lg overflow-hidden">
                      <img src={URL.createObjectURL(img.file)} className="w-full h-full object-cover" alt="nft" />
                      <p className="absolute bottom-0 bg-black/70 text-xs p-1 w-full truncate text-white">
                        {img.description}
                      </p>
                      <button
                        className="absolute top-1 right-1 text-red-500"
                        onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Payment & Wallet Auth</h3>

                {!walletAddress ? (
                  <Button className="btn-secondary w-full mb-4" onClick={connectWallet}>
                    Connect MetaMask Wallet
                  </Button>
                ) : (
                  <div className="mb-4 text-green-400 text-sm">
                    ✅ Connected to: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </div>
                )}

                <Button className="btn-primary w-full" disabled={!walletAddress || deploying} onClick={handleDeployment}>
                  {deploying ? 'Deploying...' : 'Pay & Deploy'}
                </Button>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Deployment Successful!</h3>
                {mintLogs.map((log, i) => (
                  <p key={i} className="text-gray-400">{log}</p>
                ))}
                <a
                  href={`${COLLECTION_BASE_URL}/${collectionData?.collectionAddress}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="btn-primary mt-4">View Collection on OpenSea</Button>
                </a>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button className="btn-secondary" onClick={prev}>
                  Back
                </Button>
              )}
              {step < 4 && (
                <Button className="btn-primary ml-auto" onClick={next}>
                  Next Step
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateNFT;
