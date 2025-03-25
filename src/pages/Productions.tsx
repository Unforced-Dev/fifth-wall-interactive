
import React from 'react';
import Layout from '@/components/Layout';
import ProductionCard, { Production } from '@/components/ProductionCard';
import AnimatedText from '@/components/AnimatedText';

const Productions = () => {
  const productions: Production[] = [
    {
      id: "best-cult",
      title: "The Best Cult Ever Party",
      description: "A transcendent one-night gathering that transformed strangers into family.",
      year: "2023",
      tagline: "A cult for one night only.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&w=800",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder - replace with actual video
      fullDescription: "The Best Cult Ever Party was designed as a transformative social experiment. In a single night, we created the feeling of profound belonging that typically takes cults years to establish. Through carefully crafted immersive activities, shared rituals, and guided connection points, strangers discovered their interconnected humanity. As Duncan says, 'A great party is a cult for one night only' - but without the harmful manipulation."
    },
    {
      id: "death-house",
      title: "Death House",
      description: "An immersive journey through mortality and rebirth.",
      year: "2022",
      tagline: "Spectacular footage of raw transformation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&w=800",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      fullDescription: "Death House invited participants to confront their mortality through a guided journey of symbolic death and rebirth. This immersive experience combined ritual theater, sensory deprivation, and carefully choreographed interactions to create profound shifts in consciousness. Participants moved through different 'rooms' of experience, each representing a stage in the journey from life to death to rebirth, emerging transformed and with new perspective."
    },
    {
      id: "dating-show",
      title: "The Dating Show to Save the World",
      description: "Love as theater, theater as salvation.",
      year: "2022",
      tagline: "Love as theater, theater as salvation.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&w=800",
      fullDescription: "The Dating Show to Save the World reimagined romance as both personal and planetary healing. This participatory theatrical experience invited audience members to become contestants in a dating show where the stakes weren't just love, but the future of humanity. Through playful interactions, vulnerable sharing, and unexpected twists, participants explored how deeper connection might be the key to addressing our collective challenges."
    },
    {
      id: "independence",
      title: "Independence the Musical",
      description: "A revolutionary musical for the Independent National Convention.",
      year: "2021",
      tagline: "For the Independent National Convention.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&w=800",
      fullDescription: "Created specifically for the Independent National Convention, Independence the Musical blended politics with art to envision a new kind of civic engagement. The production featured original music, audience participation, and moments of collective imagining to inspire a more collaborative political future. The show became a living metaphor for the independent movement itself—diverse voices harmonizing despite differences."
    },
    {
      id: "envision",
      title: "Envision the Musical",
      description: "A festival's soul captured in song and movement.",
      year: "2021",
      tagline: "A festival's soul in song.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=800",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      fullDescription: "Envision the Musical transformed the essence of a beloved transformational festival into a theatrical experience. This original production combined music, dance, and interactive elements to capture the festival's spirit of connection, sustainability, and personal growth. Attendees weren't just watching—they were participating in co-creating the festival magic in a new form."
    },
    {
      id: "creative-cauldron",
      title: "Creative Cauldron",
      description: "New York City's legendary psychedelic party series.",
      year: "2019",
      tagline: "New York City's psychedelic party series.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=800",
      fullDescription: "Creative Cauldron was a recurring New York City event series that blended art, music, performance, and consciousness exploration. Each gathering created a container for authentic expression and unexpected connections. With a rotating cast of collaborators from various artistic disciplines, these gatherings became known as incubators for creative breakthroughs and meaningful relationships that continued far beyond the events themselves."
    },
  ];

  const upcomingEvents = [
    {
      id: "bicycle-day",
      title: "Bicycle Day with Portal Psychedelics",
      description: "A celebration of creativity and consciousness expansion.",
      location: "Denver",
      year: "2025",
      status: "Coming Soon"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <AnimatedText 
            text="Our Mind-Melting Creations" 
            className="text-3xl md:text-5xl font-bold mb-4 neon-text"
            animation="splatter"
          />
          <AnimatedText 
            text="We transform forums. Here's proof." 
            className="text-xl text-white/80"
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {productions.map((production, index) => (
            <ProductionCard 
              key={production.id} 
              production={production} 
              index={index}
            />
          ))}
        </div>
        
        {upcomingEvents.length > 0 && (
          <div className="mt-16">
            <AnimatedText 
              text="Step Into the Next Portal" 
              className="text-2xl md:text-4xl font-bold mb-8 neon-text-pink text-center"
              animation="splatter"
            />
            <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto animate-pulse">
              {upcomingEvents.map(event => (
                <div key={event.id} className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/80 mb-1">{event.location}, {event.year}</p>
                  <p className="text-neon-purple font-medium">{event.status}</p>
                  <p className="mt-4 text-white/60 text-sm">Details coming soon. Sign up for updates on our Services page.</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Productions;
