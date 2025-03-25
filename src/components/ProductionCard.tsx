
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export interface Production {
  id: string;
  title: string;
  description: string;
  year: string;
  tagline: string;
  image: string;
  video?: string;
  fullDescription?: string;
}

interface ProductionCardProps {
  production: Production;
  index: number;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ production, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Random gotcha popup (1 in 10 chance)
  const randomGotcha = () => {
    if (Math.random() > 0.9) {
      setTimeout(() => {
        alert('Caught you! Ready to create your own immersive experience?');
        window.location.href = '/services';
      }, 500);
    }
  };

  return (
    <>
      <div 
        className="glass-card overflow-hidden transition-all duration-500 cursor-pointer group animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
        onClick={() => {
          handleOpen();
          randomGotcha();
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={production.image} 
            alt={production.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-neon-purple text-sm font-medium mb-1">{production.year}</p>
            <h3 className="text-xl font-bold text-white mb-1">{production.title}</h3>
            <p className="text-white/80 text-sm">{production.tagline}</p>
          </div>
        </div>
        
        <div 
          className={`absolute inset-0 bg-neon-purple/10 opacity-0 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : ''
          }`}
        ></div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-portal-light border border-white/10 text-white rounded-xl">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <DialogTitle className="text-2xl font-bold neon-text mb-2">
            {production.title} ({production.year})
          </DialogTitle>
          
          <DialogDescription className="text-white/80 mb-4">
            {production.tagline}
          </DialogDescription>
          
          {production.video && (
            <div className="mb-6 aspect-video w-full">
              <iframe
                src={production.video}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${production.title} video`}
              ></iframe>
            </div>
          )}
          
          <div className="space-y-4">
            <p className="text-white/90">
              {production.fullDescription || production.description}
            </p>
            <div className="pt-4 border-t border-white/10">
              <h4 className="font-bold text-lg mb-2">Relive the Magic</h4>
              <p className="text-white/70">
                Want to create a transformative experience like this? 
                <a href="/services" className="text-neon-purple ml-1 hover:underline">
                  Let's talk
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductionCard;
