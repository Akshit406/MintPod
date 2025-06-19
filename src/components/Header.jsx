import Button from './Button';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src='/logo.png' className="w-8 h-8 bg-purple-600 rounded-full"></img>
          
          <h1 className="text-xl font-bold">MintPod</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/create" className="hover:text-purple-400 transition">Create</a>
          <a href="/community" className="hover:text-purple-400 transition">Community</a>
        </nav>
        <Button className="connect-wallet btn-secondary">Connect Wallet</Button>
      </div>
    </header>
  );
};

export default Header;