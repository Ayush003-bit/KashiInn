
  import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CulturalConnectionSection = () => {
  const culturalElements = [
  {
    icon: "Sunrise",
    title: "Sacred Ganges",
    description: "Located steps away from the holy ghats, experience the spiritual energy of the eternal river that has witnessed millennia of devotion.",
    image: "https://images.unsplash.com/photo-1682489251896-c06dd3b3dea1",
    imageAlt: "Peaceful sunrise view of Ganges river with traditional wooden boats floating on calm waters and ancient stone ghats in background"
  },
  {
    icon: "Flame",
    title: "Evening Aarti",
    description: "Witness the mesmerizing Ganga Aarti ceremony from our rooftop terrace, where thousands of lamps illuminate the night sky in devotion.",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775586058/download_1_cgwd2b.jpg",
    imageAlt: "Spectacular evening Ganga Aarti ceremony with priests holding large brass lamps creating circles of fire against twilight sky"
  },
  {
    icon: "Building2",
    title: "Ancient Temples",
    description: "Explore centuries-old temples within walking distance, each telling stories of faith, architecture, and timeless spiritual traditions.",
    image: "https://res.cloudinary.com/ds2nijf5a/image/upload/v1775586040/Ratneshwar_Mahadev_Temple_Varanasi___Uttar_Pradesh_kusf1l.jpg",
    imageAlt: "Ornate ancient temple architecture with intricate stone carvings detailed sculptures and towering spires against clear blue sky"
  },
  {
    icon: "Music",
    title: "Classical Arts",
    description: "Immerse yourself in the birthplace of Indian classical music and dance, where every evening resonates with soulful melodies.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1e94944-1764706204345.png",
    imageAlt: "Traditional Indian classical musician playing sitar in ornate performance hall with warm lighting and decorative backdrop"
  }];


  return (

      <section className="py-14 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background to-muted/30">
  <div className="container mx-auto px-4 md:px-6">
    
    {/* HEADER */}
    <div className="text-center mb-12 md:mb-16 lg:mb-20">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 rounded-full mb-5 shadow-md">
        <Icon name="Heart" size={18} className="text-white" />
        <span className="font-poppins text-xs md:text-sm text-white tracking-wide">
          Cultural Heritage
        </span>
      </div>

      <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-5 leading-tight">
        The Soul of Kashi
      </h2>

      <p className="font-poppins text-sm md:text-base text-muted-foreground max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
        Kashi, the eternal city, is not just a place—it's a living philosophy.
        Here, spirituality flows through every street, every ritual, every moment of existence.
      </p>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center mb-14 md:mb-20">
      
      {/* IMAGE */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden shadow-xl group">
        <Image
          src="https://images.unsplash.com/photo-1696386795102-57cbe1d83503"
          alt="Varanasi"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <h3 className="font-headline text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-3">
            Varanasi: The City of Light
          </h3>
          <p className="font-poppins text-sm md:text-base text-white/90 leading-relaxed">
            One of the world's oldest continuously inhabited cities, Kashi has been a beacon of spiritual wisdom for over 3,000 years.
          </p>
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="space-y-6 md:space-y-8">
        <div className="space-y-4">
          <p className="font-poppins text-sm md:text-base text-foreground leading-relaxed">
            Kashi, also known as Varanasi or Banaras, is considered the spiritual capital of India...
          </p>

          <p className="font-poppins text-sm md:text-base text-foreground leading-relaxed">
            The city's essence lies in its ghats—the stone steps leading to the Ganges...
          </p>

          <p className="font-poppins text-sm md:text-base text-foreground leading-relaxed">
            At HotelKashiIn, we don't just offer accommodation...
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          
          <div className="bg-white/70 backdrop-blur-md border border-white/30 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Icon name="MapPin" size={26} className="text-orange-600 mb-3" />
            <h4 className="font-poppins text-base md:text-lg font-semibold text-foreground mb-1">
              84 Sacred Ghats
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Each with unique significance
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/30 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <Icon name="Building" size={26} className="text-orange-600 mb-3" />
            <h4 className="font-poppins text-base md:text-lg font-semibold text-foreground mb-1">
              2000+ Temples
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground">
              Ancient shrines of devotion
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {culturalElements?.map((element, index) => (
        
        <div
          key={index}
          className="group bg-background/80 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
        >
          
          <div className="relative h-48 md:h-56 overflow-hidden">
            <Image
              src={element?.image}
              alt={element?.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute top-4 left-4 w-11 h-11 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center shadow">
              <Icon name={element?.icon} size={20} className="text-white" />
            </div>
          </div>

          <div className="p-5 md:p-6">
            <h3 className="font-poppins text-lg md:text-xl font-semibold text-foreground mb-2">
              {element?.title}
            </h3>

            <p className="font-poppins text-sm text-muted-foreground leading-relaxed">
              {element?.description}
            </p>
          </div>
        </div>

      ))}
    </div>

  </div>
</section>


    );

};

export default CulturalConnectionSection;