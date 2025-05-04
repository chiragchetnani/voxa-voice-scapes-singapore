
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AudioWaveAnimation from '@/components/AudioWaveAnimation';
import FeatureCard from '@/components/FeatureCard';
import ProcessStep from '@/components/ProcessStep';
import UseCaseTabs from '@/components/UseCaseTabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mic, 
  BarChart3, 
  Code, 
  Layers, 
  Puzzle, 
  Globe, 
  Zap,
  PenTool,
  Settings,
  Play,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const observeElements = (selector: string, className: string) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => observer.observe(el));
      observers.push(observer);
    };

    // Observe different element groups with staggered animations
    observeElements('.animate-on-scroll', 'animate-fade-in');
    
    // Clean up observers
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-voxa-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen pt-28 pb-20 flex items-center">
        <div className="absolute inset-0 overflow-hidden grid-background z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex px-4 py-1 rounded-full bg-voxa-secondary/50 backdrop-blur-sm text-voxa-teal mb-8 items-center">
              <AudioWaveAnimation className="mr-2" barCount={4} />
              <span>The Sound of Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-voxa-light-text via-white to-voxa-muted-text bg-clip-text text-transparent">
              Craft Immersive Voice Experiences
            </h1>
            
            <h2 className="text-xl md:text-2xl mb-8 text-voxa-muted-text max-w-2xl mx-auto">
              Build intelligent, multi-modal voice applications for Alexa, Google Assistant & more — all with zero code. Engage your audience like never before.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-6">
                Start Building Free
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-voxa-orange text-voxa-orange hover:bg-voxa-orange/10">
                Explore Platform
              </Button>
            </div>
            
            {/* Abstract visualization */}
            <div className="mt-16 md:mt-24 relative h-64 animate-float">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-voxa-teal/20 blur-3xl"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border border-voxa-teal/30 rounded-full animate-pulse-glow"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <AudioWaveAnimation barCount={10} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Voice? Why Voxa? Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-voxa-teal">Voice</span>?<br/>
                Why <span className="text-voxa-teal">Voxa</span>?
              </h2>
              <p className="text-lg text-voxa-muted-text mb-6">
                Voice is rapidly becoming the preferred way for people to interact with technology.
                In Singapore and across Asia Pacific, voice search usage has grown by over 270% since 2019.
              </p>
              <p className="text-lg text-voxa-muted-text">
                Voxa makes it effortless to build sophisticated voice experiences without writing a single line of code.
                Our platform is designed specifically for the Singaporean market, with local language support and region-specific integrations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 animate-on-scroll">
              <div className="bg-voxa-secondary p-6 rounded-xl flex gap-4">
                <div className="bg-voxa-dark/50 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="text-voxa-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Reach New Audiences</h3>
                  <p className="text-voxa-muted-text">Over 40% of Singaporeans now use voice assistants at least weekly.</p>
                </div>
              </div>
              
              <div className="bg-voxa-secondary p-6 rounded-xl flex gap-4">
                <div className="bg-voxa-dark/50 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="text-voxa-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">No-Code Platform</h3>
                  <p className="text-voxa-muted-text">Visual, drag-and-drop interface for building complex voice flows.</p>
                </div>
              </div>
              
              <div className="bg-voxa-secondary p-6 rounded-xl flex gap-4">
                <div className="bg-voxa-dark/50 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="text-voxa-teal" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Deep Analytics</h3>
                  <p className="text-voxa-muted-text">Understand user behavior with comprehensive voice interaction insights.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-voxa-darker relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">
              Powerful Features for <span className="text-voxa-teal">Voice Innovation</span>
            </h2>
            <p className="text-lg text-voxa-muted-text">
              Everything you need to create engaging voice experiences that delight users and drive business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">
            <FeatureCard
              title="Visual Flow Builder"
              description="Create complex conversational flows with our intuitive drag-and-drop interface. No coding required."
              icon={PenTool}
              highlighted={true}
            />
            
            <FeatureCard
              title="Multi-Platform Support"
              description="Deploy to Alexa, Google Assistant, and other voice platforms from a single project."
              icon={Layers}
            />
            
            <FeatureCard
              title="Analytics Dashboard"
              description="Gain insights into user behavior, common queries, and conversion paths."
              icon={BarChart3}
            />
            
            <FeatureCard
              title="API Integrations"
              description="Connect your voice experience to existing systems and third-party services."
              icon={Puzzle}
            />
            
            <FeatureCard
              title="Singapore Optimization"
              description="Support for Singlish, local slang, and regional accents for better recognition rates."
              icon={Globe}
            />
            
            <FeatureCard
              title="Instant Deployment"
              description="Push changes live in minutes, not days. Test and iterate quickly to perfect your experience."
              icon={Zap}
              highlighted={true}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">
              How <span className="text-voxa-teal">Voxa</span> Works
            </h2>
            <p className="text-lg text-voxa-muted-text">
              Our streamlined process takes you from concept to deployment in four simple steps.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16 md:space-y-24 relative animate-on-scroll">
              {/* Connecting line */}
              <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-voxa-secondary hidden md:block"></div>
              
              <ProcessStep
                number={1}
                title="Design Your Voice Flow"
                description="Map out your conversation paths, triggers, and responses using our intuitive visual editor. Define how users will interact with your application."
                icon={PenTool}
              />
              
              <ProcessStep
                number={2}
                title="Customize Interactions"
                description="Fine-tune your voice responses, add visual elements, and connect your application to external APIs and data sources."
                icon={Settings}
              />
              
              <ProcessStep
                number={3}
                title="Test & Deploy"
                description="Use our built-in simulator to test your application, then deploy directly to Alexa, Google Assistant, and other platforms with one click."
                icon={Play}
              />
              
              <ProcessStep
                number={4}
                title="Analyze & Improve"
                description="Track user interactions, identify success patterns and drop-off points, then iterate based on real-world usage data."
                icon={BarChart3}
              />
            </div>
            
            <div className="mt-16 text-center animate-on-scroll">
              <Button className="btn-primary text-lg px-8 py-6">
                See It In Action <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-voxa-darker relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-voxa-teal">Voxa</span> in Action
            </h2>
            <p className="text-lg text-voxa-muted-text">
              Discover how businesses across Singapore are leveraging voice technology to engage customers and streamline operations.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <UseCaseTabs />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-voxa-dark to-voxa-darker z-0"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-voxa-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-voxa-orange/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Give Your Business a <span className="text-voxa-teal">Voice</span>?
            </h2>
            <p className="text-xl text-voxa-muted-text mb-10">
              Join forward-thinking Singaporean businesses already using Voxa to create memorable voice experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-6">
                Start Building Free
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-voxa-orange text-voxa-orange hover:bg-voxa-orange/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-voxa-darker py-12 border-t border-voxa-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-voxa-teal to-voxa-cyan bg-clip-text text-transparent mb-4">
                VOXA
              </div>
              <p className="text-voxa-muted-text mb-4">
                The voice application platform for innovative businesses in Singapore.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-voxa-muted-text hover:text-voxa-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-voxa-muted-text hover:text-voxa-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-voxa-muted-text hover:text-voxa-teal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-voxa-muted-text hover:text-voxa-teal">Features</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Pricing</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Documentation</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">About</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Careers</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Blog</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Voice Design Guide</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Case Studies</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Community</a></li>
                <li><a href="#" className="text-voxa-muted-text hover:text-voxa-teal">Support</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-voxa-secondary/30" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-voxa-muted-text text-sm">
              © 2025 Voxa. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-voxa-muted-text hover:text-voxa-teal text-sm">Privacy Policy</a>
              <a href="#" className="text-voxa-muted-text hover:text-voxa-teal text-sm">Terms of Service</a>
              <a href="#" className="text-voxa-muted-text hover:text-voxa-teal text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
