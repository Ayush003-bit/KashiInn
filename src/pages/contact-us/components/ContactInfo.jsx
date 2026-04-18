
  import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'MapPin',
      title: 'Visit Us',
      primary: 'A36/41 C Bhadau, Rajghat (Near Bhadau Beer Baba Mandir)',
      secondary: 'Varanasi, Uttar Pradesh 221002, India',
      action: 'Get Directions',
      link: 'https://maps.google.com'
    },
    {
      icon: 'Phone',
      title: 'Call Us',
      primary: '+91 9511119560, 9559536662',
      secondary: 'Available 24/7 for reservations',
      action: 'Call Now',
      link: 'tel:+91 9511119560'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      primary: 'hotelkashiinnrajghat@gmail.com',
      secondary: 'Response within 2 hours',
      action: 'Send Email',
      link: 'mailto:hotelkashiinnrajghat@gmail.com'
    },
    {
      icon: 'MessageSquare',
      title: 'WhatsApp',
      primary: '+91 9559536662',
      secondary: 'Quick responses via chat',
      action: 'Chat Now',
      link: 'https://wa.me/919559536662'
    }
  ];

  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              How Can We Help You?
            </h2>
            <p className="font-poppins text-sm md:text-md lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to connect with our dedicated team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {contactMethods?.map((method) => (
              <div
                key={method?.title}
                className="bg-card rounded-xl p-8 md:p-8 space-y-4 hover:shadow-golden transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Icon name={method?.icon} size={24} className="text-white md:w-7 md:h-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-poppins text-base md:text-lg font-semibold text-foreground">
                    {method?.title}
                  </h3>
                  <p className="font-poppins text-sm md:text-sm font-medium text-foreground">
                    {method?.primary}
                  </p>
                  <p className="font-poppins text-xs md:text-sm text-muted-foreground">
                    {method?.secondary}
                  </p>
                </div>
                <a
                  href={method?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm px-4 py-2 rounded-md font-poppins font-medium bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-300"
                >
                  <span>{method?.action}</span>
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;