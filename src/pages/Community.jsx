const Community = () => {
  // Mock data for NFTs
  const nfts = [
    {
      id: 1,
      title: 'Cosmic Dreams #42',
      creator: '0x7f5a...f0e17',
      date: '2 days ago',
      image: '/placeholder-nft.jpg'
    },
    {
      id: 2,
      title: 'Neon Jungle',
      creator: '0x2cb6...7d2cb',
      date: '1 week ago',
      image: '/placeholder-nft.jpg'
    },
    {
      id: 3,
      title: 'Digital Essence',
      creator: '0xa786...dfa78',
      date: '3 days ago',
      image: '/placeholder-nft.jpg'
    },
    {
      id: 4,
      title: 'Pixelated Reality',
      creator: '0xe531...70e53',
      date: '5 hours ago',
      image: '/placeholder-nft.jpg'
    },
    {
      id: 5,
      title: 'Abstract Thoughts',
      creator: '0x0f0e...170f0',
      date: '2 weeks ago',
      image: '/placeholder-nft.jpg'
    },
    {
      id: 6,
      title: 'Cyberpunk Origins',
      creator: '0x7f5a...f0e17',
      date: '1 month ago',
      image: '/placeholder-nft.jpg'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Community Showcase</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="nft-card">
            <div className="bg-gray-700 h-64 rounded-t-lg"></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{nft.title}</h3>
              <p className="text-gray-400 text-sm mb-2">by {nft.creator}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{nft.date}</span>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;