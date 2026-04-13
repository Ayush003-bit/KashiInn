
  import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
  { path: '/homepage', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/our-rooms', label: 'Our Rooms' },
  { path: '/facilities-and-amenities', label: 'Facilities' },
  { path: '/contact-us', label: 'Contact' }];


 


  const socialLinks = [
  { name: 'Facebook', icon: 'Facebook', href: '#' },
  { name: 'Instagram', icon: 'Instagram', href: '#' },
  { name: 'Twitter', icon: 'Twitter', href: '#' },
  { name: 'Youtube', icon: 'Youtube', href: '#' }];


  const contactInfo = [
  {
    icon: 'MapPin',
    title: 'Address',
    content: 'Parade Kothi Rd, Near Cantt Roadways, Vijay Nagar Colony, Cantt, Varanasi, Uttar Pradesh 221002'
  },
  {
    icon: 'Phone',
    title: 'Phone',
    content: '+91 81271 98888'
  },
  {
    icon: 'Mail',
    title: 'Email',
    content: 'stay@hotelkashiin.com'
  }];


  return (
    <footer className="bg-amber-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
             
              <div className="flex flex-col">
                <span className="font-headline text-xl font-medium">
                  KashiInn
                </span>
                


              </div>
            </div>
            <p className="font-poppins text-sm opacity-90 leading-relaxed">
              Experience the perfect blend of ancient wisdom and modern luxury in the
              spiritual heart of Kashi. Your sanctuary awaits.
            </p>
            <div className="flex space-x-4">
              {socialLinks?.map((social) =>
              <a
                key={social?.name}
                href={social?.href}
                className="footer-social-link"
                aria-label={social?.name}
                target="_blank"
                rel="noopener noreferrer">

                  <Icon name={social?.icon} size={20} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks?.map((link) =>
              <li key={link?.path}>
                  <Link
                  to={link?.path}
                  className="font-poppins text-sm opacity-90 hover:opacity-100 hover:text-primary transition-all duration-300 inline-flex items-center group">

                    <Icon
                    name="ChevronRight"
                    size={16}
                    className="mr-1 transform group-hover:translate-x-1 transition-transform duration-300" />

                    {link?.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

         

          <div>
            <h3 className="font-headline text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo?.map((info) =>
              <li key={info?.title} className="flex items-start space-x-3">
                  <div className="bg-white px-3 py-3 rounded-lg">
                    <Icon name={info?.icon} size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <p className="font-poppins text-xs font-medium opacity-80 mb-1">
                      {info?.title}
                    </p>
                    <p className="font-poppins text-sm opacity-90">{info?.content}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-poppins text-sm opacity-80 text-center md:text-left">
              © {currentYear} HotelKashiIn. All rights reserved. Crafted with devotion.
            </p>
            <div className=" flex items-center">
             
              <span className="font-poppins text-sm opacity-80 flex items-center gap-1">Made with  <Icon name="Heart" size={16} className="fill-red-600 text-red-600" /> by Media FleetBlue

              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-logo-container {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.15), rgba(212, 165, 116, 0.25));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .footer-social-link {
          width: 40px;
          height: 40px;
          background: rgba(212, 165, 116, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .footer-social-link:hover {
          background: rgba(212, 165, 116, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 165, 116, 0.2);
        }

        .footer-contact-icon {
          width: 36px;
          height: 36px;
          background: rgba(212, 165, 116, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>
    </footer>);

};

export default Footer;