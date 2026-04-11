
  import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us - HotelKashiIn | Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact HotelKashiIn for reservations, event planning, and inquiries. Available 24/7 with multilingual support. Located near Dashashwamedh Ghat, Varanasi."
        />
        <meta
          name="keywords"
          content="contact hotel varanasi, hotel booking varanasi, event planning kashi, wedding venue varanasi, hotel near dashashwamedh ghat"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
    

        <main className="pt-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <Breadcrumb />
          </div>

          <ContactHero />
          <ContactInfo />
          <ContactForm />
         
         
          
        </main>

        
      </div>
    </>
  );
};

export default ContactUs;