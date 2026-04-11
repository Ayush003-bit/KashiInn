

import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import BookingModal from '../../our-rooms/components/BookingModel';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
   const [openModal, setOpenModal] = useState(false);

  const heroSlides = [
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729849/WhatsApp_Image_2026-04-09_at_12.37.37_PM_1_b6zsne.jpg",
      imageAlt: "Luxurious hotel room with golden sunrise light streaming through large windows overlooking Varanasi ghats and Ganges river",
      title: "Where Ancient Wisdom Meets Modern Luxury",
      subtitle: "Experience the spiritual heart of Kashi in contemporary comfort"
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729850/WhatsApp_Image_2026-04-09_at_12.37.38_PM_2_ur2nf1.jpg",
      imageAlt: "Elegant hotel lobby with traditional Indian architectural elements",
      title: "Your Sanctuary in Sacred Kashi",
      subtitle: "Discover tranquility where tradition embraces innovation"
    },
    {
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729845/WhatsApp_Image_2026-04-09_at_12.37.40_PM_2_eeiy2n.jpg",
      imageAlt: "Serene hotel terrace overlooking Ganges river",
      title: "Experience Kashi Through Contemporary Comfort",
      subtitle: "Immerse yourself in culture without compromising on luxury"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-[100vh] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">

      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[4000ms] ease-linear"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-6 md:space-y-8">

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight animate-fade-in drop-shadow-lg">
                {heroSlides[currentSlide]?.title}
              </h1>

              <p className="font-poppins text-base sm:text-lg md:text-md lg:text-2xl text-white/90 max-w-xl">
                {heroSlides[currentSlide]?.subtitle}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setOpenModal(true)}
                className="bg-amber-700 hover:bg-amber-600 cursor-pointer transition-all duration-300 hover:scale-105 shadow-lg text-white"
              >
                Book Your Stay
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-4">
              {[
                { icon: "Star", text: "4.9/5 Rating" },
                { icon: "Users", text: "2000+ Guests" },
                { icon: "Award", text: "Award Winning" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 backdrop-blur-md bg-white/10 px-3 py-2 rounded-lg">
                  <Icon name={item.icon} size={18} className="text-amber-600" />
                  <span className="text-sm md:text-base text-white">{item.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-30"
      >
        <Icon name="ChevronLeft" size={22} className="text-white" />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 z-30"
      >
        <Icon name="ChevronRight" size={22} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-brand-gold w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/80 w-2 sm:w-3'
            }`}
          />
        ))}
      </div>

       <BookingModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>

      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;