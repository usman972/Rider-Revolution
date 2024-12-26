import React from 'react';

const FeatureCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="relative mb-4">
        <div className="text-9xl font-bold text-blue-500 opacity-20">
          {number}
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-blue-600">
          {number}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2 font-myFont2">{title}</h3>
      <p className="text-gray-600 font-myFont2 text-lg">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      number: '1',
      title: 'DYNAMIC BIDDING SYSTEM',
      description: 'Buy And Sell Bikes And Parts Effortlessly With Real-Time Updates',
    },
    {
      number: '2',
      title: 'TAILORED WORKSHOPS & EVENTS',
      description: 'Thrilling Races And Immersive Workshops For All Skill Levels',
    },
    {
      number: '3',
      title: 'EXPERT MAINTENANCE & CUSTOMIZATION',
      description: 'Certified Mechanics And Professional Customization Services',
    },
  ];

  return (
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
