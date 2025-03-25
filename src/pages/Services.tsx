
import React from 'react';
import Layout from '@/components/Layout';
import ServiceSection from '@/components/ServiceSection';
import ContactForm from '@/components/ContactForm';
import AnimatedText from '@/components/AnimatedText';

const Services = () => {
  const services = [
    {
      title: "Book Us for Your Event",
      description: "We will transform your forum. Corporate ritual theater, festival musicals, or bespoke parties—your vision, our alchemy. We've created immersive experiences for corporations, festivals, and private gatherings, including 'Bet on Love with the Classics Department' and 'Envision the Musical.' Let us design a custom experience that will break your fifth wall.",
      ctaText: "Contact Us to Break Your Fifth Wall",
      ctaLink: "#contact-form"
    },
    {
      title: "Attend Our Next Public Event",
      description: "Join the tribe. Step into an edgy, participatory playground where you'll discover new facets of yourself and connect with others in unexpected ways. Our public events sell out quickly, so make sure you're on the list to receive announcements about upcoming gatherings like our 'Pearl Street Live Performance' planned for 2025.",
      ctaText: "Sign Up for Updates",
      ctaLink: "#sign-up"
    },
    {
      title: "Book Duncan as a Speaker",
      description: "Invite Duncan to share his insights on the impact of transformational theater on culture and why we need more participants in our collective story. His talks blend neuroscience, art theory, and shamanic wisdom into a compelling call for more meaningful engagement with life. As a collaborator with the founder of Blue Man Group and host of the 'Psychedelic Society' podcast, Duncan brings unique perspectives on performance, consciousness, and cultural evolution.",
      ctaText: "Invite Duncan to Speak",
      ctaLink: "#speaker-form"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <AnimatedText 
            text="Transform Your Forum" 
            className="text-3xl md:text-5xl font-bold mb-4 neon-text"
            animation="splatter"
          />
          <AnimatedText 
            text="We create immersive playgrounds. How will you play?" 
            className="text-xl text-white/80"
            delay={300}
          />
        </div>
        
        <div className="max-w-2xl mx-auto mb-16">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              title={service.title}
              description={service.description}
              ctaText={service.ctaText}
              ctaLink={service.ctaLink}
              index={index}
            />
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div id="contact-form" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text text-center">Get in Touch</h2>
            <ContactForm 
              formTitle="Book an Event"
              buttonText="Let's Create Magic"
              includeWildIdea={true}
            />
          </div>
          
          <div id="sign-up" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text-pink text-center">Stay Updated</h2>
            <div className="glass-card p-6 md:p-8">
              <p className="text-white/80 mb-4">
                Be the first to know about upcoming events, workshops, and opportunities to participate.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                  required
                />
                <button 
                  type="submit"
                  className="ripple-button px-6 py-2 bg-neon-pink text-white rounded-lg font-medium hover:bg-neon-pink/80 transition-colors duration-300 whitespace-nowrap"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          
          <div id="speaker-form" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 neon-text-blue text-center">Book Duncan as a Speaker</h2>
            <ContactForm 
              formTitle="Speaker Inquiry"
              buttonText="Send Inquiry"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
