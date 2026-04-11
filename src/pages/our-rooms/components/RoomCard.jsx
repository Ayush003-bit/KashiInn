
  import React from 'react';
  import { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import BookingModal from '../components/BookingModel';

const RoomCard = ({ room, onViewDetails}) => {

    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-golden hover:shadow-golden-glow transition-all duration-300 group">
      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={room?.image}
          alt={room?.imageAlt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
       
       
        <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg">

        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-headline text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {room?.name}
            </h3>
            <div className="flex items-center space-x-1 bg-brand-gold/10 px-2 py-1 rounded-lg">
              <Icon name="Star" size={14} className="text-amber-600" />
              <span className="font-poppins text-sm font-medium text-foreground">{room?.rating}</span>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-2 gap-3">
          {room?.features?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={feature?.icon} size={16} className="text-amber-600" />
              </div>
              <span className="font-poppins text-xs text-foreground">{feature?.label}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-poppins text-xs text-muted-foreground">Starting from</p>
              <div className="flex items-baseline space-x-2">
                {room?.originalPrice && (
                  <span className="font-poppins text-sm text-amber-600 line-through">
                    ₹{room?.originalPrice?.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="font-poppins text-2xl font-semibold text-amber-600">
                  ₹{room?.price?.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="font-poppins text-xs text-muted-foreground">per night</p>
            </div>
            <div className="flex items-center space-x-1 text-success">
              <Icon name="CheckCircle" size={16} className='text-amber-600' />
              <span className="font-poppins text-xs font-medium">Available</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button
              className="cursor-pointer"
              variant="outline"
              size="default"
              iconName="Info"
              iconPosition="left"
              onClick={() => onViewDetails(room)}
              fullWidth
            >
              Details
            </Button>
            <Button
              variant="default"
              size="default"
              iconName="Calendar"
              iconPosition="left"
               onClick={() => setOpenModal(true)}
              fullWidth
              className="bg-amber-700 hover:bg-amber-600 text-white cursor-pointer"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

       <BookingModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  room={room}
/>
    </div>

   
  );
};

export default RoomCard;