
  import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../components/ui/Breadcrumb';
import FacilityHero from './components/FacilityHero';
import FacilityCard from './components/FacilityCard';
import DiningExperience from './components/DiningExperience';
import Icon from '../../components/AppIcon';
import BookingModal from '../our-rooms/components/BookingModel';

const FacilitiesAndAmenities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreFacilities = [
  {
    id: 1,
    name: "Lift",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951197/Images_28_w16x8c.jpg",
    imageAlt: "",
    description: "Smooth, safe, and efficient lift service for guests.",
    features: ["Fast", "Reliable", "Spacious"],
    timing: "24 hours"
  },
  {
    id: 2,
    name: "Banquet Hall",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729845/WhatsApp_Image_2026-04-09_at_12.37.40_PM_2_eeiy2n.jpg",
    imageAlt: "Modern fitness center with state-of-the-art equipment, treadmills, weight machines, floor-to-ceiling windows, and bright natural lighting",
    description: "Elegant Banquet hall for memorable  celebrations",
    features: ["Spacious", "Decorated", "Luxurious"],
    timing: "24 Hours"
  },
  {
    id: 3,
    name: "Catering",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729850/WhatsApp_Image_2026-04-09_at_12.37.38_PM_2_ur2nf1.jpg",
    imageAlt: "",
    description: "Delicious catering service for events, weddings, and parties",
   
    features: ["Fresh", "Hygienic", "Varied"],
    timing: ""
  },
  ];

   const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <Helmet>
        <title>Facilities & Amenities - HotelKashiIn | Luxury Services in Varanasi</title>
        <meta
          name="description"
          content="Discover world-class facilities at HotelKashiIn including spa, dining, cultural activities, and business amenities. Experience luxury and tradition in the heart of Kashi." />

        <meta
          name="keywords"
          content="hotel facilities Varanasi, luxury amenities Kashi, spa services, dining experiences, cultural activities, business facilities" />

      </Helmet>
      
      <main className="min-h-screen">
        <FacilityHero />

        <div className="container mx-auto px-4 py-4">
          <Breadcrumb />
        </div>

        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center space-x-2 bg-amber-600 px-4 py-2 rounded-full mb-4">
                <Icon name="Star" size={20} className="text-white" />
                <span className="font-poppins text-sm text-white">Premium Amenities</span>
              </div>
              <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Core Facilities
              </h2>
              <p className="font-poppins text-md md:text-sm text-muted-foreground">
                Every amenity thoughtfully designed to enhance your comfort and enrich your experience at Hotel KashiIn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreFacilities?.map((facility) =>
              <FacilityCard key={facility?.id} facility={facility} />
              )}
            </div>
          </div>
        </section>

        <DiningExperience />

        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-golden-glow p-8 md:p-12 lg:p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/40 rounded-full mb-6">
                <Icon name="Sparkles" size={32} className="text-amber-600" />
              </div>
              <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Ready to Experience Luxury?
              </h2>
              <p className="font-poppins text-base md:text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book your stay at Hotel KashiIn and immerse yourself in a world where ancient wisdom meets modern comfort. Your spiritual journey awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center space-x-2 bg-amber-700 hover:bg-amber-600 cursor-pointer text-white px-8 py-4 rounded-lg font-cta text-base font-medium transition-all duration-300 shadow-golden hover:shadow-golden-glow"  onClick={() => setOpenModal(true)}>
                  <Icon name="Calendar" size={20} />
                  <span>Book Your Stay</span>
                </button>
                <button className="inline-flex items-center justify-center space-x-2 bg-card hover:bg-muted text-foreground px-8 py-4 rounded-lg font-cta text-base font-medium transition-all duration-300 border border-border cursor-pointer"  onClick={() => window.open("tel:9559536662")}>
                  <Icon name="Phone" size={20} />
                  <span>Call Us Now</span>
                </button>
              </div>
            </div>
          </div>
        </section>

          
       <BookingModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  
/>
      </main>
    </>);

};

export default FacilitiesAndAmenities;