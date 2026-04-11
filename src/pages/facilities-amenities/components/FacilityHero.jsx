
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilityHero = () => {
  return (
    <section className="relative h-[80vh] md:h-[70vh] lg:h-[80vh] overflow-hidden mt-8">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729847/WhatsApp_Image_2026-04-09_at_12.37.40_PM_gngo9q.jpg"
          alt=""
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl space-y-4 md:space-y-6 lg:space-y-8">
          <div className="inline-flex items-center space-x-2 bg-amber-600 px-4 md:px-6 py-2 md:py-3 rounded-full">
            <Icon name="Sparkles" size={20} className="text-white" />
            <span className="font-poppins text-xs md:text-sm text-white">
              Experience Luxury & Culture
            </span>
          </div>

          <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Facilities & Amenities
          </h1>

          <p className="font-poppins text-md md:text-md text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover a harmonious blend of modern luxury and traditional wellness, where every amenity is designed to elevate your spiritual journey in Kashi
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4">
           
            <div className="flex items-center space-x-2 text-white/90 border-2 rounded-full px-4 py-2">
              <Icon name="Utensils" size={20} className="text-amber-600" />
              <span className="font-poppins text-sm md:text-md">Fine Dining</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 border-2 rounded-full px-4 py-2">
              <Icon name="Wifi" size={20} className="text-amber-600" />
              <span className="font-poppins text-sm md:text-md">High-Speed WiFi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white/80" />
      </div>
    </section>);

};

export default FacilityHero;