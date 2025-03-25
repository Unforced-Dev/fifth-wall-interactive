
import React, { useEffect, useState, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'splatter';
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  animation = 'fade',
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: number;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            timeout = window.setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else if (!entry.isIntersecting && !once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, [delay, isVisible, once]);

  const animationClass = animation === 'fade' 
    ? 'line-appear' 
    : 'text-splatter';

  return (
    <div 
      ref={textRef} 
      className={`${animationClass} ${isVisible ? animation === 'fade' ? 'appear' : 'animate' : ''} ${className}`}
    >
      {text}
    </div>
  );
};

// Component for animating text line by line
export const AnimatedParagraph: React.FC<{
  text: string;
  className?: string;
  lineDelay?: number;
  baseDelay?: number;
}> = ({ text, className = '', lineDelay = 200, baseDelay = 100 }) => {
  const lines = text.split('. ').filter(line => line.trim() !== '');
  
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <AnimatedText
          key={index}
          text={`${line}${index < lines.length - 1 ? '.' : ''}`}
          delay={baseDelay + (index * lineDelay)}
          className="mb-4"
        />
      ))}
    </div>
  );
};

export default AnimatedText;
