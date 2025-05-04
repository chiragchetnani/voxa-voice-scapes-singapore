
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="flex items-start md:items-center gap-6 group">
      {/* Step number with subtle highlight */}
      <div className="relative flex-shrink-0">
        <div className="bg-voxa-secondary w-16 h-16 rounded-full flex items-center justify-center z-10 relative border border-voxa-teal/20 transition-all duration-300">
          <span className="text-voxa-teal font-bold text-2xl">{number}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-1">
          <Icon size={20} className="text-voxa-teal" strokeWidth={1.5} />
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
        <p className="text-voxa-muted-text">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
