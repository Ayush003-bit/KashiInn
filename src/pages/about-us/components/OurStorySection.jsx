
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const OurStorySection = () => {
  

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-600 px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" size={20} className="text-white" />
            <span className="font-poppins text-sm text-white">Our Journey</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            A Story Written in Devotion
          </h2>
          <p className="font-poppins text-base md:text-md text-muted-foreground max-w-3xl mx-auto">
            From a humble vision to becoming Kashi's premier heritage hotel, our journey reflects the timeless spirit of this sacred city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20">
          <div className="space-y-6">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden golden-shadow">
              <Image
                src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1774955825/Pic1_dzspvq.jpg"
                alt="Elegant heritage hotel"
                className="w-full h-full object-cover" />

            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-32 md:h-40 rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1774956016/Images_29_lreiuj.jpg"
                  alt="Traditional Indian courtyard with lotus pond surrounded by sandstone architecture and flowering plants in golden afternoon light"
                  className="w-full h-full object-cover" />

              </div>
              <div className="relative h-32 md:h-40 rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951102/Images_38_rz6pqt.jpg"
                  alt="Serene meditation space with traditional Indian decor featuring brass lamps silk cushions and carved wooden panels"
                  className="w-full h-full object-cover" />

              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="font-poppins text-base md:text-md text-foreground py-2">
                In 2015, a group of passionate hoteliers and cultural enthusiasts came together with a singular dream: to create a sanctuary that honors Kashi's ancient heritage while offering the comforts of modern luxury.
              </p>
              <p className="font-poppins text-base md:text-md text-foreground leading-relaxed py-2">
                What began as a restored heritage building has blossomed into a living testament to Indian hospitality. Every stone, every artifact, every design element tells a story of devotion to preserving the cultural richness of this sacred city.
              </p>
              <p className="font-poppins text-base md:text-md text-foreground leading-relaxed py-2">
                Today, HotelKashiIn stands as a bridge between eras—where guests can experience the spiritual essence of ancient Kashi while enjoying contemporary amenities and world-class service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card p-4 md:p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Users" size={24} className="text-amber-600" />
                  <span className="font-poppins text-2xl md:text-3xl font-semibold text-foreground">
                    20K+
                  </span>
                </div>
                <p className="font-poppins text-sm text-muted-foreground">
                  Happy Guests Served
                </p>
              </div>

              <div className="bg-card p-4 md:p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Star" size={24} className="text-amber-600" />
                  <span className="font-poppins text-2xl md:text-3xl font-semibold text-foreground">
                    4.9/5
                  </span>
                </div>
                <p className="font-poppins text-sm text-muted-foreground">
                  Average Guest Rating
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
    );

};

export default OurStorySection;