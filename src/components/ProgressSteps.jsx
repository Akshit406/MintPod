const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Collection Info' },
    { id: 2, label: 'Upload Images' },
    { id: 3, label: 'Payment & Wallet Auth' },
    { id: 4, label: 'Deployment Progress' }
  ];

  return (
    <div className="relative">
      <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-700">
        <div 
          className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-500" 
          style={{ height: `${(currentStep - 1) * 33.33}%` }}
        ></div>
      </div>
      
      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative z-10 
              ${currentStep >= step.id ? 'bg-teal-500 text-white' : 'bg-gray-700 text-gray-400'}`}
            >
              {step.id}
            </div>
            <div className="ml-4">
              <h4 className={`text-sm font-medium 
                ${currentStep >= step.id ? 'text-white' : 'text-gray-400'}`}
              >
                {step.label}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;