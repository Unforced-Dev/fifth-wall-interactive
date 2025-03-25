
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  formTitle?: string;
  buttonText?: string;
  includeWildIdea?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  formTitle = "Get in Touch", 
  buttonText = "Send Message",
  includeWildIdea = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    wildIdea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as we break through the fifth wall.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
        wildIdea: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="glass-card p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 neon-text">{formTitle}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white/80 mb-1 text-sm">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white/80 mb-1 text-sm">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-white/80 mb-1 text-sm">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 resize-none"
          />
        </div>
        
        {includeWildIdea && (
          <div>
            <label htmlFor="wildIdea" className="block text-white/80 mb-1 text-sm">
              Tell us your wildest idea (optional)
            </label>
            <textarea
              id="wildIdea"
              name="wildIdea"
              value={formData.wildIdea}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 resize-none"
            />
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="ripple-button w-full px-6 py-3 bg-neon-purple text-white rounded-lg font-medium hover:bg-neon-purple/80 transition-colors duration-300 disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
