"use client";
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';

import ceremonyImage from "@assets/Church_1760595562685.jpg";
import receptionImage from "@assets/VENUE_1760595562684.webp";

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'Parish of San Nicholas de Tolentino',
      address: 'Tobias Fornier, Antique',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/MSMghL3HzjWkYKMU7',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15698.4!2d122.01!3d10.41!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed89e89e89e89%3A0x1234567890abcdef!2sParish%20of%20San%20Nicholas%20de%20Tolentino%2C%20Tobias%20Fornier%2C%20Antique!5e0!3m2!1sen!2sph!4v1699999999999!5m2!1sen!2sph',
      description: 'Join us at the Parish of San Nicholas de Tolentino for our sacred wedding ceremony. This beautiful church will witness our vows of eternal love as we begin our journey together.',
      details: 'The ceremony begins promptly at 3:30 PM. Please arrive by 3:00 PM to be seated. Dress code: Pastel Colors.',
      startTime: '3:30 PM'
    },
    {
      title: 'Reception',
      name: 'La Familia Beach Resort',
      address: 'Atabay, Tobias Fornier, Antique',
      image: receptionImage,
      mapUrl: 'https://maps.app.goo.gl/H3AW3xWvqycf23yM6',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15698.4!2d122.01!3d10.41!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aed89e89e89e89%3A0xfedcba0987654321!2sLa%20Familia%20Beach%20Resort%2C%20Atabay%2C%20Tobias%20Fornier%2C%20Antique!5e0!3m2!1sen!2sph!4v1699999999999!5m2!1sen!2sph',
      description: 'Celebrate with us at La Familia Beach Resort, a beautiful beachfront venue where we will share joy, laughter, and create unforgettable memories together.',
      details: 'Join us for grazing, photoshoot, and games starting at 4:30 PM, followed by dinner and reception activities at 7:00 PM.',
      startTime: '4:30 PM'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="section-pastel-blue py-12 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
        initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 6.8 } : { duration: 0 }}
      >
        <h1 className="text-5xl md:text-6xl font-display italic text-foreground mb-2" data-testid="text-venue-section-title">
          Venue
        </h1>
      </motion.div>

      {/* Venues */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {venues.map((venue, index) => (
          <motion.div 
            key={index}
            className="glass-lavender border border-primary/20 rounded-3xl overflow-hidden shadow-lg"
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, delay: 7.2 + (index * 0.3) } : { duration: 0 }}
          >
            {/* Header */}
            <div className="text-center py-12 px-6">
              <h2 className="text-3xl md:text-4xl font-display italic text-foreground mb-4" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                {venue.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-display italic text-foreground/80 mb-3" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                {venue.name}
              </h3>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <p className="text-sm" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                  {venue.address}
                </p>
              </div>
            </div>

            {/* Venue Image */}
            <div className="px-8 pb-8">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  data-testid={`img-${venue.title.toLowerCase()}-venue`}
                />
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">
              {/* About Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 border-l-2 border-primary pl-3">
                  About the Venue
                </h4>
                <p className="text-foreground/80 leading-relaxed pl-3" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                  {venue.description}
                </p>
                <p className="text-sm text-foreground/70 italic pl-3" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>
              </div>

              {/* Map Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 border-l-2 border-primary pl-3">
                  Location Map
                </h4>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={venue.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`map-${venue.title.toLowerCase()}-embed`}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 pb-8 pt-4 border-t border-primary/20 mx-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-foreground/60 uppercase tracking-wide">Start Time</p>
                  <p className="text-lg font-semibold text-foreground" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                    {venue.startTime}
                  </p>
                </div>
              </div>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                data-testid={`button-${venue.title.toLowerCase()}-location`}
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default VenueSection;
