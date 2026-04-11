
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DiningExperience = () => {
  const diningOptions = [
  {
    id: 1,
    name: "Fine Dining",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729848/WhatsApp_Image_2026-04-09_at_12.37.36_PM_1_n6tpj9.jpg",
    imageAlt: "",
    description: "Exquisite restaurant offering delicious meals in elegant ambiance",
    specialties: ["Gourmet", "Ambience", "Service"],
    timing: "9:00 AM - 11:00 PM"
  },
  {
    id: 2,
    name: "Culinary Service",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729850/WhatsApp_Image_2026-04-09_at_12.37.37_PM_omnnlg.jpg",
    description: "Professional chefs and staff delivering exceptional dining experience",
    specialties: ["Skilled", "Courteous", "Efficient"],
    timing: "9:00 AM - 11:00 PM",
  },
  {
    id: 3,
    name: "Dining Area",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775729846/WhatsApp_Image_2026-04-09_at_12.37.41_PM_1_njmbfp.jpg",
   
    description: "Comfortable seating space for relaxed and enjoyable dining",
    specialties: ["Cozy", "Spacious", "Elegant"],
    timing: "9:00 AM - 11:00 PM",
   
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-600 px-4 py-2 rounded-full mb-4">
            <Icon name="ChefHat" size={20} className="text-white" />
            <span className="font-poppins text-sm text-white">Culinary Excellence</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Dining Experiences
          </h2>
          <p className="font-poppins text-base md:text-md text-muted-foreground">
            Savor authentic flavors and contemporary cuisine in settings that celebrate Kashi's rich culinary heritage
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {diningOptions?.map((dining) =>
          <div
            key={dining?.id}
            className="bg-card rounded-2xl overflow-hidden shadow-golden hover:shadow-golden-glow transition-all duration-500 group">

              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                src={dining?.image}
                alt={dining?.imageAlt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                 
                  <h3 className="font-headline text-xl md:text-2xl font-semibold text-white">
                    {dining?.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-4">
                <p className="font-poppins text-sm md:text-md text-muted-foreground line-clamp-3">
                  {dining?.description}
                </p>

                <div className="space-y-2">
                  <p className="font-poppins text-xs font-sm text-foreground">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {dining?.specialties?.map((specialty, index) =>
                  <span
                    key={index}
                    className="inline-flex items-center bg-gray-200 px-3 py-1 rounded-full text-xs font-poppins text-black">

                        {specialty}
                      </span>
                  )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-sm font-body text-muted-foreground">
                    <Icon name="Clock" size={16} className="text-amber-600" />
                    <span className='font-poppins'>{dining?.timing}</span>
                  </div>
                  <Button className="bg-amber-700 hover:bg-amber-600 cursor-pointer rounded-md text-white" variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right"   onClick={() =>
    window.open(
      "https://wa.me/918127198888?text=Hello, I want to enquire about Food Menu",
      "_blank"
    )
  }>
                    Enquiry
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default DiningExperience;