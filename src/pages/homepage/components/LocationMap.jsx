
  import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const nearbyAttractions = [
    {
      name: "Dashashwamedh Ghat",
      distance: "200m",
      icon: "Waves",
      description: "Main ghat for Ganga Aarti"
    },
    {
      name: "Kashi Vishwanath Temple",
      distance: "500m",
      icon: "Building2",
      description: "Ancient Shiva temple"
    },
    {
      name: "Assi Ghat",
      distance: "2.5km",
      icon: "Sunrise",
      description: "Popular sunrise spot"
    },
    {
      name: "Varanasi Airport",
      distance: "25km",
      icon: "Plane",
      description: "Lal Bahadur Shastri Airport"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/30 px-4 py-2 rounded-full mb-4">
            <Icon name="MapPin" size={20} className="text-[rgba(194,110,20,1)]" />
            <span className="font-poppins text-sm font-medium text-[rgba(194,110,20,1)]">Prime Location</span>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            In the Heart of Sacred Kashi
          </h2>
          <p className="font-poppins text-base md:text-sm text-muted-foreground">
            Perfectly positioned near the holiest ghats and ancient temples of Varanasi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl overflow-hidden shadow-golden-glow h-96 md:h-[500px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="HotelKashiIn Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=25.3176,83.0099&z=15&output=embed"
                className="border-0"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-golden">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center">
                  <Icon name="Navigation" size={24} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-poppins text-md font-semibold text-foreground">
                    Our Address
                  </h3>
                  <p className="font-poppins text-sm text-muted-foreground">
                    Easy to find
                  </p>
                </div>
              </div>
              <p className="font-poppins text-sm text-foreground leading-relaxed">
                A36/41 C Bhadau, Rajghat (Near Bhadau Beer Baba Mandir) Varanasi
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-golden">
              <h4 className="font-poppins text-lg font-semibold text-foreground mb-4">
                Nearby Attractions
              </h4>
              <div className="space-y-4">
                {nearbyAttractions?.map((attraction, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={attraction?.icon} size={20} className="text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-poppins text-sm font-medium text-foreground">
                          {attraction?.name}
                        </h5>
                        <span className="font-poppins text-xs text-muted-foreground whitespace-nowrap">
                          {attraction?.distance}
                        </span>
                      </div>
                      <p className="font-poppins text-xs text-muted-foreground">
                        {attraction?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;