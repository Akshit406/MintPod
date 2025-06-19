import { useState, useEffect } from 'react';
import { ArrowPathIcon, ArrowRightIcon, ChartBarIcon, CubeIcon, SparklesIcon } from '@heroicons/react/24/solid';
import Button from '../components/Button';
import Stats from '../components/Stats';
import FeaturedCollection from '../components/FeaturedCollection';
import TrendingCreators from '../components/TrendingCreators';

const Home = () => {
  const [ethMetrics, setEthMetrics] = useState({
    volume: '12.35 ETH',
    floorPrice: '1.2 ETH',
    change24h: '+3.2%'
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [featuredNFTs, setFeaturedNFTs] = useState([]);
  const [trendingCreators, setTrendingCreators] = useState([]);

  // Mock data fetch
  useEffect(() => {
    const fetchData = async () => {
      setIsRefreshing(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setFeaturedNFTs([
        {
          id: 1,
          name: 'Meebits ✔️',
          creator: 'Larva labs',
          price: '0.752 ETH',
          image: '/images/meebits.png',
          link: 'https://opensea.io/collection/meebits'
        },
        {
          id: 2,
          name: 'X Figures',
          creator: 'XCOPY',
          price: '0.322 ETH',
          image: '/images/xfigures.png',
          link: 'https://opensea.io/collection/x-figures-x'
        },
        {
          id: 3,
          name: 'Shapets',
          creator: 'Tormius',
          price: '0.279 ETH',
          image: '/images/shapets.png',
          link: 'https://opensea.io/collection/shapets620'
        },
        {
          id: 4,
          name: 'Meta Vixens',
          creator: 'theinkedmink',
          price: '0.0059 WETH',
          image: '/images/metavixens.png',
          link: 'https://opensea.io/collection/metavixens-exclusives-vol-2'
        },
        {
          id: 5,
          name: 'Ghost Machine',
          creator: 'Geoff Jones and Brian Hitch',
          price: '4.91 Ape',
          image: '/images/ghostmachine.png',
          link: 'https://opensea.io/collection/ghost-machine'
        }


      ]);

      setTrendingCreators([
        {
            id: 1,
            name: "Beeple",
            sales: "over $69M",
            avatar: "images/beeple.png"
        },
        {
            id: 2,
            name: "Trevorjonesart",
            sales: "£2.4M (The Bitcoin Angel)",
            avatar: "images/trevorjonesart.png"
        },
        {
            id: 3,
            name: "FEWOCiOUS",
            sales: "$20M+",
            avatar: "images/fewocious.png"
        },
        {
            id: 4,
            name: "Pak",
            sales: "$91M (The Merge)",
            avatar: "images/pak.png"
        }
      ]);

      setIsRefreshing(false);
    };

    fetchData();
  }, []);

  const refreshMetrics = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEthMetrics(prev => ({
      ...prev,
      volume: `${(Math.random() * 5 + 10).toFixed(2)} ETH`,
      floorPrice: `${(Math.random() * 0.5 + 1).toFixed(2)} ETH`,
      change24h: `${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 5).toFixed(1)}%`
    }));
    setIsRefreshing(false);
  };

  return (
    <div className="bg-pattern min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32 relative">
        {/* Animated background elements */}

        
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-teal-500 rounded-full filter blur-3xl opacity-30"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
         
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Mint Limitlessly. Collect <span className="text-gradient">Fearlessly.</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              MintPod is the leading Ethereum-based NFT minting platform. Home to the next generation of digital creators.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="btn-primary flex items-center">
                Explore Marketplace <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
              <Button className="btn-secondary flex items-center">
                <SparklesIcon className="w-5 h-5 mr-2" />
                Create Collection
              </Button>
            </div>
            
            <Stats />
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative max-w-md">
              <img 
                src="/images/cat-skull.png" 
                alt="Digital Cat Skull NFT" 
                className="w-full object-contain transition-transform duration-500 hover:scale-105"
              />

              
              <div className="absolute inset-0 bg-purple-500/10 rounded-full filter blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-gray-900/80 border border-gray-700 rounded-lg p-3 shadow-lg glow-effect">
                
                <p className="font-medium">Inside Ape 7927</p>
                <p className="text-xs text-purple-400">By Brian Morris</p>
              </div>

              <div className="absolute top-6 sm:left-0 left-[25%] -translate-x-1/2 -translate-y-1/2 z-10
                bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 glow-effect shadow-lg">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="text-gray-400 text-xs flex items-center">
                      <ChartBarIcon className="w-4 h-4 mr-2" />
                      Total Volume
                    </p>
                    <p className="text-lg font-bold">{ethMetrics.volume}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs flex items-center">
                      <CubeIcon className="w-4 h-4 mr-2" />
                      Floor Price
                    </p>
                    <p className="text-lg font-bold">{ethMetrics.floorPrice}</p>
                  </div>
                  <button 
                    onClick={refreshMetrics}
                    className="text-gray-400 hover:text-purple-400 transition"
                    disabled={isRefreshing}
                  >
                    <ArrowPathIcon className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
                <div className=" text-xs">
                  <span className={ethMetrics.change24h.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                    {ethMetrics.change24h} (24h)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-6 py-16 border-t border-gray-800">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured <span className="text-gradient">Collections</span>
          </h2>
        </div>
        <FeaturedCollection items={featuredNFTs} />
      </section>

      {/* Trending Creators */}
      <section className="container mx-auto px-6 py-16 bg-gray-900/50 rounded-2xl mt-12 border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trending <span className="text-gradient">Creators</span>
        </h2>
        <TrendingCreators creators={trendingCreators} />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-12 glow-effect">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Launch Your NFT Collection?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are building the future of digital art and collectibles on MintPod.
          </p>
          <Button className="btn-primary mx-auto" >
            Start Creating Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;