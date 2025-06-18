import Button from './Button';

const Header = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <h1 className="text-xl font-bold">MintPod</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-purple-400 transition">Home</a>
          <a href="/create" className="hover:text-purple-400 transition">Create</a>
          <a href="/community" className="hover:text-purple-400 transition">Community</a>
        </nav>
        <Button className="connect-wallet">Connect Wallet</Button>
      </div>
    </header>
  );
};

export default Header;