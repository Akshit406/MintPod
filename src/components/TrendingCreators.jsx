const TrendingCreators = ({ creators }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {creators.map((creator) => (
        <div key={creator.id} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center overflow-hidden">
              <img src={creator.avatar} alt={creator.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-medium">{creator.name}</h4>
              <p className="text-gray-400 text-sm">{creator.sales} traded</p>
            </div>
          </div>
          <button className="w-full btn-secondary text-sm py-1.5">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default TrendingCreators;