
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const CulturalStory = () => {
  const culturalHighlights = [
  {
    icon: "Sunrise",
    title: "Ganges Sunrise",
    description: "Witness the sacred morning rituals along the ghats"
  },
  {
    icon: "Flame",
    title: "Ganga Aarti",
    description: "Experience the mesmerizing evening prayer ceremony"
  },
  {
    icon: "Building2",
    title: "Ancient Temples",
    description: "Explore centuries-old spiritual landmarks nearby"
  },
  {
    icon: "Music",
    title: "Classical Arts",
    description: "Immerse in traditional music and dance performances"
  }];

  const navigate = useNavigate('');


  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full mb-6">
              <Icon name="Heart" size={20} className="text-[rgba(194,110,20,1)]" />
              <span className="font-cta text-sm font-medium text-[rgba(194,110,20,1)] font-poppins">Cultural Heritage</span>
            </div>

            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 ">
              Discover the Soul of Kashi
            </h2>

            <p className="font-poppins md:text-sm mb-8 font-normal text-[rgba(137,84,52,1)] text-base">
              Varanasi, also known as Kashi, is one of the world's oldest continuously inhabited cities. For over 3,000 years, this sacred city has been a beacon of spirituality, learning, and culture. At HotelKashiIn, we honor this rich heritage while providing you with contemporary luxury that respects tradition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {culturalHighlights?.map((highlight, index) =>
              <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={highlight?.icon} size={24} className="text-[rgba(194,110,20,1)]" />
                  </div>
                  <div>
                    <h4 className="font-poppins text-base font-medium mb-1">
                      {highlight?.title}
                    </h4>
                    <p className="font-poppins text-sm font-light">
                      {highlight?.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Button
              variant="default"
              size="lg"
              iconName="BookOpen"
              iconPosition="left"
              onClick={()=> navigate("/about-us")}
              className="bg-amber-800 text-white hover:bg-amber-700 hover:text-white cursor-pointer">

              Learn Our Story
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
              
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 md:h-56 rounded-2xl overflow-hidden shadow-golden">
                    <Image
                      src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1768806722/NamoGhat_zsi0bb.jpg"
                      alt="Traditional Indian temple with intricate stone carvings, golden spire, and devotees performing morning prayers at sunrise"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="h-64 md:h-72 rounded-2xl overflow-hidden shadow-golden">
                    <Image
                      src="https://images.unsplash.com/photo-1564462358051-f23a9fae613e"
                      alt="Varanasi ghats at sunset with traditional boats on Ganges river, ancient stone steps, and temple silhouettes against orange sky"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />

                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 md:h-72 rounded-2xl overflow-hidden shadow-golden">
                    <Image
                      src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1774953612/shree_Kashi_Vishvnath_jyotirling_oaecnv.jpg"
                      alt="Evening Ganga Aarti ceremony with priests in traditional attire holding brass lamps, creating circular patterns of light against dark sky"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="h-48 md:h-56 rounded-2xl overflow-hidden shadow-golden">
                    <Image
                      src="https://res.cloudinary.com/ds2nijf5a/image/upload/v1774953916/download_dvqyho.jpg"
                      alt="Traditional Indian classical musician playing sitar in ornate room with warm lighting and decorative wall hangings"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default CulturalStory;