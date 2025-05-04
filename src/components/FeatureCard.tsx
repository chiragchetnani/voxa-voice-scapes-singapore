
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
      className={`card group hover:-translate-y-1 ${
        highlighted ? 'card-highlight' : ''
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="bg-voxa-dark p-3 rounded-lg inline-flex items-center justify-center w-12 h-12 group-hover:bg-voxa-teal/10 transition-colors">
            <Icon 
              size={24} 
              className="text-voxa-teal" 
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
