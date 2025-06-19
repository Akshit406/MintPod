const FeaturedCollection = ({ items }) => {
  return (
    <div className=" flex space-x-6 overflow-x-scroll scrollbar-hide pb-4 -mx-6 px-6">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-64 nft-card"
        >
          <div className="bg-gray-800 rounded-lg h-48 mb-4 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 className="font-medium mb-1 ml-3">{item.name}</h4>
          <p className="text-gray-400 text-sm mb-2 ml-3">by {item.creator}</p>
          <p className="text-purple-400 font-medium ml-3 mb-4">{item.price} (B.P.)</p>
        </a>
      ))}
    </div>
  );
};

export default FeaturedCollection;