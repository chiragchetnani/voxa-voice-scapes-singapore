
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  highlighted?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  highlighted = false,
}) => {
  return (
    <div
      className={`bg-voxa-secondary rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative ${
        highlighted ? 'border border-voxa-teal/30' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="bg-voxa-dark p-3 rounded-lg inline-flex items-center justify-center w-12 h-12 transition-colors duration-300 group-hover:bg-voxa-dark/80">
            <Icon 
              size={24} 
              className="text-voxa-teal transition-transform duration-300 ease-in-out" 
              strokeWidth={1.5} 
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-voxa-light-text">{title}</h3>
        <p className="text-voxa-muted-text flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
