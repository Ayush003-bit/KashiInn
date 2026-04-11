
 import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import BookingModal from './BookingModel';

const RoomDetailsModal = ({ room, onClose}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  if (!room) return null;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? room?.gallery?.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === room?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-golden-glow">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-headline text-2xl font-semibold text-foreground">
            {room?.name}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-muted transition-colors duration-300 flex items-center justify-center"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} className="text-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src={room?.gallery?.[currentImageIndex]?.image}
              alt={room?.gallery?.[currentImageIndex]?.imageAlt}
              className="w-full h-full object-cover"
            />
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300"
              aria-label="Previous image"
            >
              <Icon name="ChevronLeft" size={24} className="text-foreground" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300"
              aria-label="Next image"
            >
              <Icon name="ChevronRight" size={24} className="text-foreground" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {room?.gallery?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-primary w-8' :'bg-background/50'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
             

              <div>
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">
                  Room Features
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {room?.detailedFeatures?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={feature?.icon} size={20} className="text-amber-600" />
                      </div>
                      <div>
                        <p className="font-poppins text-sm font-medium text-foreground">
                          {feature?.title}
                        </p>
                        <p className="font-poppins text-xs text-muted-foreground">
                          {feature?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {room?.amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-amber-600" />
                      <span className="font-poppins text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-poppins text-xs text-muted-foreground">Starting from</p>
                    <div className="flex items-baseline space-x-2">
                      {room?.originalPrice && (
                        <span className="font-poppins text-sm text-muted-foreground line-through">
                          ₹{room?.originalPrice?.toLocaleString('en-IN')}
                        </span>
                      )}
                      <span className="font-poppins text-3xl font-semibold text-amber-600">
                        ₹{room?.price?.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <p className="font-poppins text-xs text-muted-foreground">per night</p>
                  </div>
                  {room?.discount && (
                    <div className="bg-error text-error-foreground px-3 py-1 rounded-lg">
                      <span className="font-poppins text-sm font-medium">{room?.discount}% OFF</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-poppins text-muted-foreground">Room Size</span>
                    <span className="font-poppins font-medium text-foreground">{room?.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-poppins text-muted-foreground">Max Guests</span>
                    <span className="font-poppins font-medium text-foreground">{room?.maxGuests}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-poppins text-muted-foreground">Bed Type</span>
                    <span className="font-poppins font-medium text-foreground">{room?.bedType}</span>
                  </div>
                </div>

                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                   onClick={() => setOpenModal(true)}
                  fullWidth
                  className="bg-amber-700 hover:bg-amber-600 text-white cursor-pointer"
                >
                  Book This Room
                </Button>
              </div>

              
            </div>
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

export default RoomDetailsModal;