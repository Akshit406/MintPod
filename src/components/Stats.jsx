const Stats = () => {
  const stats = [
    { value: '432K+', label: 'Collections' },
    { value: '200K+', label: 'Artists' },
    { value: '10K+', label: 'Community Members' }
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
          <p className="text-2xl font-bold text-purple-400">{stat.value}</p>
          <p className="text-gray-400 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;