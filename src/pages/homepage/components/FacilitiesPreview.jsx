
  import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const FacilitiesPreview = () => {
  const facilities = [
    {
      id: 1,
      name: "Sacred Ghats",
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1768808533/0960431bb2c967035f858ced179f7ca6_vjfzfg.jpg",
      description: "Timeless riverfront echoing spiritual serenity"
    },
    {
      id: 2,
      name: "Grand स्वागत",
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951102/Images_38_rz6pqt.jpg",
      description: "Warm arrivals with timeless comfort"
    },
    {
      id: 3,
      name: "Relax Lounge",
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774955825/Pic1_dzspvq.jpg",
      description: "Comfortable seating for peaceful moments"
    },
    {
      id: 4,
      name: "Heritage Gallery",
      image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774956016/Images_29_lreiuj.jpg",
      description: "Curated artifacts reflecting timeless traditions"
    }
  ];

  const navigate = useNavigate("");

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
            <Icon name="Star" size={18} className="text-[rgba(194,110,20,1)]" />
            <span className="font-poppins text-xs sm:text-sm font-medium text-[rgba(194,110,20,1)]">
              World-Class Amenities
            </span>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 leading-tight">
            Facilities That Elevate Your Stay
          </h2>

          <p className="font-poppins text-sm sm:text-base text-muted-foreground leading-relaxed">
            Every amenity is thoughtfully designed to enhance your journey of comfort and discovery
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-10 md:mb-12">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="group relative h-[260px] sm:h-[300px] md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-golden hover:shadow-golden-glow transition-all duration-500"
            >
              {/* Image */}
              <Image
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">

                <h3 className="font-headline text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                  {facility.name}
                </h3>

                <p className="font-poppins text-xs sm:text-sm text-white/80 mb-3 leading-snug max-w-[90%]">
                  {facility.description}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-between sm:justify-start gap-2 px-3 py-2 rounded-lg text-white 
                  bg-amber-600
                  w-fit text-xs sm:text-sm font-medium
                  group-hover:translate-x-2 transition-all duration-300 cursor-pointer shadow-md">

                  <span onClick={()=> navigate('/our-rooms')}>Explore More</span>
                  <Icon name="ArrowRight" size={18} />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <Link to="/facilities-and-amenities">
            <Button
              variant="default"
              size="lg"
              iconName="Grid"
              iconPosition="left"
              className="bg-amber-700 hover:bg-amber-600 transition-all duration-300 hover:scale-105 text-white cursor-pointer"
            >
              View All Facilities
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesPreview;