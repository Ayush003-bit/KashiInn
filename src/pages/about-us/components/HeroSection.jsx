
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (

      <section className="relative h-[80vh] md:h-[80vh] lg:h-[90vh] overflow-hidden mt-18">
  
  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1713781355770-5290776ecfbc"
      alt="Kashi"
      className="w-full h-full object-cover scale-105 transition-transform duration-[4000ms] ease-out hover:scale-110"
    />

    {/* PREMIUM OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background/95"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,180,0,0.15),transparent_70%)]"></div>
  </div>

  {/* CONTENT */}
  <div className="relative container mx-auto px-4 md:px-6 h-full flex items-center">
    <div className="max-w-3xl space-y-5 md:space-y-7 lg:space-y-9">

      {/* BADGE */}
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-md">
        <Icon name="Sparkles" size={18} className="text-amber-400" />
        <span className="font-poppins text-xs md:text-sm text-white tracking-wide">
          Est. 2015 - A Decade of Sacred Hospitality
        </span>
      </div>

      {/* HEADING */}
      <h1 className="font-headline text-md sm:text-xl md:text-3xl lg:text-3xl font-semibold text-white leading-tight tracking-tight">
        Where Ancient Wisdom
        <br className="hidden sm:block" />
        Meets Modern Luxury
      </h1>

      {/* DESCRIPTION */}
      <p className="font-poppins text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl md:max-w-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 md:px-5 py-4 md:py-5 rounded-xl shadow-sm">
        Nestled in the spiritual heart of Kashi, HotelKashiIn is more than a destination—it's a journey through time, where every corner whispers stories of devotion and every moment celebrates the timeless elegance of Indian hospitality.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap gap-3 md:gap-5 pt-2 md:pt-4">

        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-3 rounded-xl shadow-md hover:bg-white/20 transition duration-300">
          <Icon name="Award" size={22} className="text-white" />
          <div>
            <p className="font-poppins text-[10px] md:text-xs text-white/80">
              Award Winning
            </p>
            <p className="font-poppins text-xs md:text-sm font-medium text-white">
              Heritage Hotel 2024
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 md:px-6 py-3 rounded-xl shadow-md hover:bg-white/20 transition duration-300">
          <Icon name="Users" size={22} className="text-white" />
          <div>
            <p className="font-poppins text-[10px] md:text-xs text-white/80">
              Trusted By
            </p>
            <p className="font-poppins text-xs md:text-sm font-medium text-white">
              50,000+ Guests
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* SCROLL INDICATOR */}
  <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
      <Icon name="ChevronDown" size={28} className="text-white cursor-pointer" />
    </div>
  </div>

</section>


    );

};

export default HeroSection;