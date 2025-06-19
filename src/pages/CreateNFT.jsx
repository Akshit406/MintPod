import { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import ProgressSteps from '../components/ProgressSteps';

const CreateNFT = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Create Your Own NFT Collection in 3 Easy Steps</h2>
        <p className="text-gray-400 mb-8">
          All you need is a few images and a MetaMask wallet. MintPod takes care of the rest.
        </p>
        <Button 
          className="btn-primary glow-effect" 
          onClick={() => setIsModalOpen(true)}
        >
          Create Now
        </Button>
      </section>

      <div className="border-t border-gray-800 my-12"></div>

      <section>
        <h3 className="text-2xl font-bold mb-8">Your NFTs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for user's NFT collections */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="nft-card p-4">
              <div className="bg-gray-700 rounded-lg h-48 mb-4"></div>
              <h4 className="font-medium mb-2">Collection #{item}</h4>
              <Button className="btn-secondary w-full">View Collection</Button>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/3 p-6 bg-gray-800/50 border-r border-gray-700">
            <ProgressSteps currentStep={currentStep} />
          </div>
          
          <div className="md:w-2/3 p-6">
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Collection Info</h3>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Collection Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="My Awesome Collection"
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Upload Images</h3>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center mb-4">
                  <p className="text-gray-400 mb-2">Drag & drop your images here</p>
                  <p className="text-sm text-gray-500">or</p>
                  <Button className="btn-secondary mt-2">Browse Files</Button>
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Payment & Wallet Auth</h3>
                <div className="bg-gray-800/50 p-6 rounded-lg mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Minting Fee</span>
                    <span>0.05 ETH</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Gas Fee</span>
                    <span>~0.01 ETH</span>
                  </div>
                  <div className="border-t border-gray-700 my-3"></div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>~0.06 ETH</span>
                  </div>
                </div>
                <Button className="btn-primary w-full">Connect Wallet</Button>
              </div>
            )}
            
            {currentStep === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Deployment Successful!</h3>
                <p className="text-gray-400 mb-6">Your NFT collection has been minted on the Ethereum blockchain.</p>
                <Button className="btn-primary">View NFT</Button>
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button className="btn-secondary" onClick={handlePrevStep}>Back</Button>
              )}
              {currentStep < 4 ? (
                <Button className="btn-primary ml-auto" onClick={handleNextStep}>
                  Next Step
                </Button>
              ) : (
                <Button className="btn-primary ml-auto" onClick={() => setIsModalOpen(false)}>
                  Finish
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