
 
   import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilityCard = ({ facility }) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-golden hover:shadow-golden-glow transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={facility?.image}
          alt={facility?.imageAlt}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="font-cta text-xs text-white">{facility?.category}</span>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6 space-y-3 md:space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-headline text-lg md:text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {facility?.name}
            </h3>
            <p className="font-poppins text-sm md:text-sm text-muted-foreground line-clamp-2">
              {facility?.description}
            </p>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-2">
          {facility?.features?.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-muted px-2.5 py-1 rounded-full text-xs font-body text-muted-foreground"
            >
              <Icon name="Check" size={14} className="text-success" />
              <span className='font-poppins'>{feature}</span>
            </span>
          ))}
        </div>

        {facility?.timing && (
          <div className="flex items-center space-x-2 text-sm font-body text-muted-foreground pt-2 border-t border-border">
            <Icon name="Clock" size={16} className="text-amber-600" />
            <span className='font-poppins'>{facility?.timing}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityCard;