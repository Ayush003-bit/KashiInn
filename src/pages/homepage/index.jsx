
   import React, { useState, useEffect } from 'react';

import HeroSection from './components/HeroSection';
import RoomShowcase from './components/RoomShowcase';
import CulturalStory from './components/CulturalStory';
import FacilitiesPreview from './components/FacilitiesPreview';
import TestimonialSection from './components/TestimonialSection';
import LocationMap from './components/LocationMap';
import Icon from '../../components/AppIcon';
import BookingModal from '../our-rooms/components/BookingModel';

const Homepage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
   const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      
        <title>HotelKashiIn - Where Ancient Wisdom Meets Modern Luxury | Varanasi</title>
        <meta
          name="description"
          content="Experience the perfect blend of traditional Kashi aesthetics and contemporary luxury at HotelKashiIn. Your sanctuary in the spiritual heart of Varanasi with world-class amenities and cultural immersion."
        />
        <meta
          name="keywords"
          content="Varanasi hotel, Kashi accommodation, luxury hotel Varanasi, Ganges view hotel, spiritual retreat, heritage hotel, cultural experience"
        />
        <meta property="og:title" content="HotelKashiIn - Luxury Heritage Hotel in Varanasi" />
        <meta
          property="og:description"
          content="Discover authentic Kashi hospitality with modern comfort. Book your spiritual journey at HotelKashiIn."
        />
        <meta property="og:type" content="website" />
      

      <div className="min-h-screen bg-background">
      

        <main>
          <HeroSection />

        

          <RoomShowcase />

          <CulturalStory />

          <FacilitiesPreview />

          <TestimonialSection />

          <LocationMap />

          <section className="py-16 md:py-20 lg:py-24 bg-card">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="bg-orange-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-golden-glow">
                <div className="max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="PhoneCall" size={40} className="text-white" />
                  </div>
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
                    Ready to Begin Your Journey?
                  </h2>
                  <p className="font-poppins text-base md:text-sm md:font-light text-white/90 mb-8">
                    Experience the magic of Kashi with contemporary luxury. Book your stay today and discover why guests from around the world choose HotelKashiIn for their spiritual and cultural journey.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                       onClick={() => setOpenModal(true)}
                      className="inline-flex items-center justify-center space-x-2 cursor-pointer bg-white text-amber-600 px-8 py-4 rounded-xl font-cta font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Icon name="Calendar" size={20} />
                      <span>Book Your Stay</span>
                    </button>
                    <a
                      href="tel:+919511119560"
                      className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white text-sm border-2 border-white px-8 py-4 rounded-xl font-poppins font-medium hover:bg-white/20 transition-all duration-300"
                    > 
                      <Icon name="Phone" size={20} />
                      <span>Call Us Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-primary hover:bg-brand-gold text-white rounded-full flex items-center justify-center shadow-golden-glow transition-all duration-300 hover:scale-110 z-40"
            aria-label="Scroll to top"
          >
            <Icon name="ArrowUp" size={24} />
          </button>
        )}

        <BookingModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>
      </div>
    </>
  );
};

export default Homepage;