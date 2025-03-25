
import React, { useState, useRef, useEffect } from 'react';
import AnimatedText from './AnimatedText';

interface ServiceSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  index: number;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Different neon color for each section
  const neonColors = [
    'neon-text', // purple
    'neon-text-pink',
    'neon-text-blue',
  ];

  return (
    <div
      ref={sectionRef}
      className={`glass-card p-8 md:p-10 mb-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <AnimatedText
        text={title}
        className={`text-2xl md:text-3xl font-bold mb-4 ${neonColors[index % neonColors.length]}`}
        animation="splatter"
        delay={300}
      />
      
      <p className="text-white/80 mb-6">{description}</p>
      
      <a
        href={ctaLink}
        className="ripple-button inline-block px-6 py-3 bg-portal border border-neon-purple/50 hover:border-neon-purple text-white rounded-lg hover:bg-portal-light transition-all duration-300"
      >
        {ctaText}
      </a>
    </div>
  );
};

export default ServiceSection;
