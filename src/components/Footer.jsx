const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
              <h3 className="text-lg font-bold">MintPod</h3>
            </div>
            <p className="text-gray-400 text-sm">
              MintPod empowers creators to mint, showcase, and collect next-gen digital art on the Ethereum blockchain. Join the future of ownership.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <a href="/" className="text-gray-400 hover:text-purple-400 transition">Home</a>
            <a href="/create" className="text-gray-400 hover:text-purple-400 transition">Create NFT</a>
            <a href="/community" className="text-gray-400 hover:text-purple-400 transition">Community</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Docs</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">FAQ</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition">Terms & Privacy</a>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              {['Twitter', 'Discord', 'GitHub', 'Instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600/20 transition"
                >
                  <span className="sr-only">{social}</span>
                </a>
              ))}
            </div>
            
            <div className="mb-2">
              <p className="text-gray-400 text-sm mb-2">Subscribe for updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-purple-500 w-full"
                />
                <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-lg">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 MintPod. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;