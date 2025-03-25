
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { AnimatedParagraph } from '@/components/AnimatedText';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { HelpCircle } from 'lucide-react';

const About = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const bioText = "From studying classical Tantra to working in New York City high finance to creating art happenings with some of the most talented improvisational and psychedelic artists of our time, Duncan is committed to creating mind-melting theater in the moment, of the moment, as the moment. Through immersive theater, piano, and spoken word poetry, he curates meaning in every experience. 'I weave meaning from a collection of scattered stories,' he says, bridging Tantra, finance, and the arts as a psychedelic master of ceremonies. A state shift masquerading as a human, Duncan is here to disturbingly enliven your world."

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 mb-12 relative overflow-hidden">
            {/* Background psychedelic pattern */}
            <div className="absolute inset-0 opacity-10 z-0">
              <div className="absolute top-0 left-0 w-full h-full bg-portal">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-neon-purple/30 filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-neon-pink/20 filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 rounded-full bg-neon-blue/20 filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 neon-text text-center">
                Meet Duncan: The Wizard of the Empire
              </h1>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-full overflow-hidden border-2 border-neon-purple/50 animate-float">
                    <img 
                      src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&h=400" 
                      alt="Duncan" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 text-white/90 space-y-4">
                  <AnimatedParagraph
                    text={bioText}
                    className="font-display text-md md:text-lg leading-relaxed"
                    lineDelay={300}
                    baseDelay={200}
                  />
                  
                  <div className="flex items-center mt-4">
                    <p className="text-white/80 flex items-center">
                      A state shift masquerading as a human
                      <button 
                        onClick={() => setTooltipOpen(true)}
                        className="ml-2 text-neon-purple hover:text-neon-purple/80 transition-colors"
                      >
                        <HelpCircle size={16} />
                      </button>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8 mt-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 neon-text-pink">Testimonial</h2>
                <blockquote className="glass-card p-6 relative">
                  <div className="text-6xl absolute top-4 left-4 opacity-10 font-display">"</div>
                  <p className="text-white/90 italic relative z-10">
                    Duncan's events are a wild, transformative ride. He creates spaces where people discover parts of themselves they never knew existed.
                  </p>
                  <footer className="mt-4 text-right">
                    <cite className="text-neon-purple font-medium not-italic">
                      — Chris Wink, Founder of Blue Man Group
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/services" 
              className="ripple-button inline-block px-8 py-4 bg-neon-purple text-white rounded-lg font-bold hover:bg-neon-purple/80 transition-colors duration-300"
            >
              Work with Duncan
            </a>
          </div>
        </div>
      </div>
      
      <Dialog open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <DialogContent className="bg-portal-light border border-neon-purple/50 text-white max-w-md">
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-4 neon-text">Expect the unexpected</h2>
            <p className="text-white/80">
              Duncan's work is about creating moments of transformation – state shifts – that allow people to experience themselves and reality in new ways. His very presence is designed to catalyze these shifts.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default About;
