

  import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-amber-600 py-14 md:py-20 lg:py-24 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 border border-white/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 border border-white/30 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 lg:space-y-10">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-18 h-18 md:w-22 md:h-22 lg:w-24 lg:h-24 bg-white/90 backdrop-blur-md rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl">
            <Icon 
              name="MessageCircle" 
              size={32} 
              className="text-amber-600 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:rotate-6"
            />
          </div>

          {/* Heading */}
          <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-wide">
            Connect With Us
          </h1>

          {/* Description */}
          <p className="font-poppins text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Your journey to experiencing Kashi's sacred serenity begins with a conversation. 
            We're here to make your stay extraordinary.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-4 md:pt-6">

            {[
              { icon: "Clock", text: "24/7 Support" },
              { icon: "Languages", text: "Multilingual Team" },
              { icon: "Sparkles", text: "Personalized Service" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-sm md:text-base bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
              >
                <Icon name={item.icon} size={20} className="text-white" />
                <span className="font-poppins text-white">{item.text}</span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;