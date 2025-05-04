
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UseCase {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  examples?: string[];
}

const USE_CASES: UseCase[] = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Create voice-first shopping experiences that drive engagement and sales. Guide customers through product discovery, personalized recommendations, and seamless checkout.",
    benefits: [
      "Interactive product catalogs accessible by voice",
      "Voice-enabled shopping assistants",
      "Post-purchase support and order tracking",
      "Loyalty program integration"
    ],
    examples: [
      "Voice Shopping Assistant for a Singapore-based fashion retailer",
      "Voice-enabled product finder for electronic devices" 
    ]
  },
  {
    id: "finance",
    title: "Finance & Banking",
    description: "Build secure voice applications for banking services, account management, and financial guidance in compliance with Singapore's MAS regulations.",
    benefits: [
      "Secure account information access",
      "Transaction alerts and history",
      "Bill payments and fund transfers",
      "Financial literacy and advice"
    ],
    examples: [
      "Voice Banking Assistant for a leading Singaporean bank",
      "Financial literacy voice application for young adults"
    ]
  },
  {
    id: "hospitality",
    title: "Hospitality & Tourism",
    description: "Enhance guest experiences with voice-enabled concierge services, room controls, local recommendations, and seamless service requests.",
    benefits: [
      "In-room voice assistants for hotel guests",
      "Virtual concierge services",
      "Local attraction recommendations",
      "Smart room controls"
    ],
    examples: [
      "In-room voice assistant for a luxury hotel chain in Singapore",
      "Tourist guide voice application for Singapore's attractions"
    ]
  },
  {
    id: "smart-nation",
    title: "Smart Nation Initiatives",
    description: "Support Singapore's Smart Nation vision with voice applications that improve citizen access to government services, healthcare information, and public transportation.",
    benefits: [
      "Voice-enabled public service information",
      "Healthcare appointment scheduling",
      "Public transportation guidance",
      "Community engagement"
    ],
    examples: [
      "Voice application for accessing government services",
      "Public transportation voice guide for tourists and residents"
    ]
  }
];

const UseCaseTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('retail');

  return (
    <Tabs 
      defaultValue="retail" 
      className="w-full" 
      onValueChange={(value) => setActiveTab(value)}
    >
      <div className="mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-voxa-secondary/50 p-1">
          {USE_CASES.map((useCase) => (
            <TabsTrigger 
              key={useCase.id} 
              value={useCase.id} 
              className={`data-[state=active]:bg-voxa-teal data-[state=active]:text-voxa-dark`}
            >
              {useCase.title.split(' & ')[0]}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {USE_CASES.map((useCase) => (
        <TabsContent 
          key={useCase.id} 
          value={useCase.id} 
          className={`bg-voxa-secondary rounded-xl p-6 space-y-4 ${activeTab === useCase.id ? 'animate-fade-in' : ''}`}
        >
          <h3 className="text-2xl font-semibold">{useCase.title}</h3>
          <p className="text-voxa-light-text text-lg">{useCase.description}</p>
          
          <div className="mt-6">
            <h4 className="text-xl font-medium mb-2">Key Benefits</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {useCase.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-voxa-teal mr-2">•</span>
                  <span className="text-voxa-light-text">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {useCase.examples && (
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-2">Success Stories</h4>
              <ul className="space-y-1">
                {useCase.examples.map((example, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-voxa-orange mr-2">→</span>
                    <span className="text-voxa-muted-text">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default UseCaseTabs;
