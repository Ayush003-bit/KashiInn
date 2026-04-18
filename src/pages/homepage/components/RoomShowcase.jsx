
  import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from "react-router-dom"

const RoomShowcase = () => {

  const navigate = useNavigate();
  const rooms = [
  {
    id: 1,
    name: " Delux Room",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774950995/Images_18_lcfbcr.jpg",
    imageAlt: "Spacious deluxe hotel room with king-size bed, warm golden lighting, traditional Indian artwork on walls, and large windows overlooking Ganges river",
    price: "₹3500",
    size: "",
    capacity: "",
    amenities: ["Suits", "AC Suits","Dormitory","Marriage Party","Birthday Party","Anniversary","Other Events"],
     rating: 4.9,
    reviews: 203,
  },
  {
    id: 2,
    name: "Family Sweet Room",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951063/Images_21_udfl8s.jpg",
    imageAlt: "Luxurious heritage suite with ornate traditional Indian decor, carved wooden furniture, silk curtains, and separate living area with plush seating",
    price: "₹5500",
    size: "",
    capacity: "",
    amenities: ["Suits", "AC Suits","Dormitory","Marriage Party","Birthday Party","Anniversary","Other Events"],
    rating: 4.9,
    reviews: 203,
    popular: false
  },
  {
    id: 3,
    name: "Family Room",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1774951393/Images_32_q6uwoo.jpg",
    imageAlt: "Opulent royal suite featuring traditional Indian palace-style architecture, gold accents, marble flooring, private terrace with panoramic city views",
    price: "₹4500",
    size: "",
    capacity: "",
    amenities: ["Suits", "AC Suits","Dormitory","Marriage Party","Birthday Party","Anniversary","Other Events"],
    rating: 5.0,
    reviews: 89,
    popular: true
  }];


  return (
    <section className="py-16 md:py-10 lg:py-10 bg-background">
      <div className="container px-4 mx-auto md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Heart" size={20} className="text-[rgba(151,86,18,1)]" />
            <span className="font-poppins text-sm font-medium text-[rgba(151,86,18,1)]">Our Accommodations</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Experience Luxury Redefined
          </h2>
          <p className="font-poppins text-base md:text-md text-muted-foreground">
            Each room is a sanctuary designed to blend traditional Kashi aesthetics with contemporary comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms?.map((room) =>
          <div
            key={room?.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-golden hover:shadow-golden-glow transition-all duration-500 hover:-translate-y-2">

              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                src={room?.image}
                alt={room?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                {room?.popular &&
              <div className="absolute top-4 right-4 bg-brand-gold text-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Icon name="TrendingUp" size={14} />
                    <span className="font-poppins text-xs font-medium">Popular</span>
                  </div>
              }
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 mr-2 rounded-lg">
                    <span className="font-poppins text-md font-semibold text-foreground">
                      {room?.price}
                    </span>
                    <span className="font-poppins text-xs text-muted-foreground ml-1">/night</span>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-lg flex items-center space-x-1">
                    <Icon name="Star" size={14} className="text-brand-gold fill-brand-gold" />
                    <span className="font-cta text-sm font-medium text-foreground">{room?.rating}</span>
                    <span className="font-body text-xs text-muted-foreground">({room?.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {room?.name}
                </h3>

                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Maximize2" size={16} />
                    <span className="font-poppins">{room?.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} />
                    <span className="font-poppins">{room?.capacity}</span>
                  </div>
                </div>

               <ul className="flex flex-wrap gap-2 mb-6">
  {room?.amenities?.map((amenity, index) => (
    <li key={index}>
      <span
        className="bg-white/90 px-3 py-1 mx-2 my-2 rounded-full font-poppins text-xs text-muted-foreground"
      >
        {amenity}
      </span>
    </li>
  ))}
</ul>


                <Button  onClick={()=> navigate('/our-rooms')}
                variant="outline"
                size="default"
                iconName="ArrowRight"
                iconPosition="right"
                fullWidth
                className="group-hover:bg-amber-800 group-hover:text-white group-hover:border-0 cursor-pointer">

                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link to="/our-rooms">
            <Button
              variant="default"
              size="lg"
              iconName="Grid"
              iconPosition="left"
              className="bg-amber-900 text-white hover:bg-amber-700 hover:text-white cursor-pointer">

              Explore All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default RoomShowcase;