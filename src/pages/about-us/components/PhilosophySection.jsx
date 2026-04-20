
   import React from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPillars = [
    {
      icon: "Heart",
      title: "Atithi Devo Bhava",
      subtitle: "Guest is God",
      description: "This ancient Sanskrit phrase guides every interaction. We don't just serve guests—we honor them as divine beings, treating each person with reverence, warmth, and genuine care.",
      color: "bg-brand-gold/10"
    },
    {
      icon: "Leaf",
      title: "Sustainable Luxury",
      subtitle: "Harmony with Nature",
      description: "True luxury respects the earth. Our eco-friendly practices—from solar energy to organic gardens—ensure that comfort never comes at the cost of our planet's wellbeing.",
      color: "bg-success/10"
    },
    {
      icon: "Users",
      title: "Cultural Preservation",
      subtitle: "Living Heritage",
      description: "We employ local artisans, showcase traditional crafts, and support cultural initiatives. Every stay contributes to preserving Kashi's rich artistic and spiritual traditions.",
      color: "bg-brand-ganges/10"
    },
    {
      icon: "Sparkles",
      title: "Mindful Experiences",
      subtitle: "Beyond Accommodation",
      description: "We curate transformative journeys—yoga sessions at sunrise, meditation by the Ganges, cultural workshops—that nourish the soul and create lasting memories.",
      color: "bg-brand-flame/10"
    }
  ];

  const values = [
    {
      icon: "Shield",
      title: "Authenticity",
      description: "Every element reflects genuine Indian heritage"
    },
    {
      icon: "Smile",
      title: "Warmth",
      description: "Hospitality that feels like coming home"
    },
    {
      icon: "Award",
      title: "Excellence",
      description: "Uncompromising standards in every detail"
    },
    {
      icon: "Globe",
      title: "Inclusivity",
      description: "Welcoming guests from all walks of life"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-700 px-4 py-2 rounded-full mb-4">
            <Icon name="Compass" size={20} className="text-white" />
            <span className="font-poppins text-sm text-white">Our Philosophy</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Hospitality as a Sacred Art
          </h2>
          <p className="font-poppins text-base md:text-md text-muted-foreground max-w-3xl mx-auto">
            Our approach to hospitality is rooted in ancient Indian wisdom, where serving guests is considered a spiritual practice and every interaction is an opportunity for connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {philosophyPillars?.map((pillar, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 golden-shadow hover:golden-glow transition-all duration-300"
            >
              <div className={`w-16 h-16 ${pillar?.color} rounded-2xl flex items-center justify-center mb-6`}>
                <Icon name={pillar?.icon} size={32} className="text-amber-700" />
              </div>

              <div className="mb-4">
                <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  {pillar?.title}
                </h3>
                <p className="font-poppins text-base md:text-lg text-amber-700 italic">
                  {pillar?.subtitle}
                </p>
              </div>

              <p className="font-poppins text-sm md:text-sm text-muted-foreground leading-relaxed">
                {pillar?.description}
              </p>
            </div>
          ))}
        </div>



        <div className="relative bg-gradient-to-br from-primary/5 via-background to-brand-gold/10 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
  
  {/* subtle glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,0,0.12),transparent_60%)] pointer-events-none"></div>

  {/* HEADER */}
  <div className="text-center mb-10 md:mb-14 relative z-10">
    <h3 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
      Our Core Values
    </h3>
    <p className="font-poppins text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto leading-relaxed">
      These principles guide every decision we make and every experience we create
    </p>
  </div>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
    {values?.map((value, index) => (
      
      <div
        key={index}
        className="group bg-background/70 backdrop-blur-md border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
      >
        
        {/* ICON */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner group-hover:scale-110 transition duration-300">
          <Icon name={value?.icon} size={26} className="text-amber-700" />
        </div>

        {/* TITLE */}
        <h4 className="font-poppins text-lg md:text-xl font-semibold text-foreground mb-2">
          {value?.title}
        </h4>

        {/* DESC */}
        <p className="font-poppins text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {value?.description}
        </p>

        {/* HOVER LINE */}
        <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
      
      </div>
    ))}
  </div>
</div>




       

        <div className="mt-12 md:mt-16 bg-card rounded-2xl p-8 md:p-12 golden-shadow">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
               
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto lg:mx-0">
  
  {/* Profile Image Container */}
  <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-lg bg-white">
    <img
      src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1776679065/WhatsApp_Image_2026-04-18_at_4.43.18_PM_itctzu.jpg"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Quote Icon Overlay */}
  <div className="absolute -bottom-2 -right-2 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-2 shadow-md border border-gray-100">
    <Icon name="Quote" size={20} className="text-amber-600 sm:w-6 sm:h-6" />
  </div>
</div>
            </div>

            <div className="lg:w-2/3 text-center lg:text-left">
              <blockquote className="font-accent text-lg md:text-xl lg:text-2xl text-foreground italic leading-relaxed mb-4">
                "In KashiInn, we don't just offer rooms—we offer refuge. We don't just provide service—we share our souls. Every guest who walks through our doors becomes part of our eternal story."
              </blockquote>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-headline text-lg font-semibold text-foreground">
                    Satydeep singh
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;