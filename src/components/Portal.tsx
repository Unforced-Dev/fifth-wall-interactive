
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PortalProps {
  onEnter?: () => void;
}

const Portal: React.FC<PortalProps> = ({ onEnter }) => {
  const [isEntering, setIsEntering] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const portalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Function to play entry sound
  const playEntrySound = () => {
    const audio = new Audio('/sounds/portal-enter.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log('Audio play failed:', e));
  };

  // Handle portal entry
  const handleEnter = () => {
    setIsEntering(true);
    // Optional: Play sound effect
    try {
      playEntrySound();
    } catch (error) {
      console.log('Could not play audio:', error);
    }
    
    // Show message after animation starts
    setTimeout(() => {
      setShowMessage(true);
      if (onEnter) onEnter();
    }, 500);
    
    // Navigate after animation completes
    setTimeout(() => {
      navigate('/productions');
    }, 3000);
  };

  // Add ripple effect on hover
  useEffect(() => {
    const portal = portalRef.current;
    if (!portal) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (isEntering) return;
      
      const rect = portal.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = (x - centerX) / 10;
      const distY = (y - centerY) / 10;
      
      // Apply subtle transform
      portal.style.transform = `translate(${distX}px, ${distY}px)`;
    };
    
    const handleMouseLeave = () => {
      portal.style.transform = 'translate(0px, 0px)';
    };
    
    portal.addEventListener('mousemove', handleMouseMove);
    portal.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      portal.removeEventListener('mousemove', handleMouseMove);
      portal.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isEntering]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 relative">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neon-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-pink/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-portal-dark opacity-50"></div>
      </div>

      {/* Main content with portal */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 neon-text">
          Fifth Wall Productions
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-12 animate-flicker">
          Are You Ready to Break the Fifth Wall?
        </p>
        
        {/* Portal door element */}
        <div 
          ref={portalRef}
          className={`portal-door w-64 h-64 mx-auto mb-10 cursor-pointer transition-all duration-300 ${isEntering ? 'animate-door-open' : 'hover:scale-105'}`} 
          onClick={handleEnter}
        >
          <div className="portal-border"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-bold text-white mb-2">Enter the Portal</p>
              <p className="text-sm text-white/70">Leave the audience behind</p>
            </div>
          </div>
        </div>
        
        {/* Entry message */}
        {showMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 animate-fade-in-slow">
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 neon-text-pink">You've entered the portal!</h2>
              <p className="text-4xl md:text-6xl font-bold mb-6 text-white">Excellent!</p>
              <p className="text-xl md:text-2xl mb-6 text-white/90">
                Everyone is a participant. Everyone is a creator. 
                There is no distinction between performers and audience.
              </p>
              <p className="text-xl md:text-2xl text-neon-blue font-bold">
                How do you want to play?
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portal;
