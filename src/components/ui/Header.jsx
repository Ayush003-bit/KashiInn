
 
   import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from '../../pages/our-rooms/components/BookingModel';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const navigationItems = [
  { path: '/homepage', label: 'Home' },
  { path: '/about-us', label: 'About Us' },
  { path: '/our-rooms', label: 'Our Rooms' },
  { path: '/facilities-and-amenities', label: 'Facilities' },
  { path: '/contact-us', label: 'Contact' }];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card' : 'bg-card'}`
        }>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/homepage"
              className="flex items-center space-x-3 group"
              onClick={handleNavClick}>

              
              <div className="flex flex-col">
                <span className="font-headline text-2xl font-semibold text-foreground">KashiInn

                </span>
                


              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) =>
              <Link
                key={item?.path} 
                to={item?.path}
                className={`font-poppins text-sm font-medium transition-all duration-300 relative group ${
                isActivePath(item?.path) ?
                'text-primary' : 'text-foreground hover:text-primary'}`
                }>

                  {item?.label}
                  <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActivePath(item?.path) ? 'w-full' : 'w-0 group-hover:w-full'}`
                  } />

                </Link>
              )}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:+919559536662"
                variant="outline"
                size="default"
                iconName="Phone"
                iconPosition="left"
                className=" font-poppins border border-red-600 rounded-lg px-4 py-2 inline-block">

                Call Us
              </a>
              <Button
                variant="default"
                size="default"
                iconName="Calendar"
                iconPosition="left"
                  onClick={() => setOpenModal(true)}
                className="font-poppins bg-amber-600 text-white hover:bg-amber-500 cursor-pointer">
                Book Now
              </Button>
            </div>

            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors duration-300"
              aria-label="Toggle mobile menu">

              <Icon
                name={isMobileMenuOpen ? 'X' : 'Menu'}
                size={24}
                className="text-foreground"/>

            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-card z-40 lg:hidden transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`
        }
        style={{ top: '80px' }}>

        <nav className="flex flex-col p-6 space-y-6 overflow-y-auto h-full">
          {navigationItems?.map((item) =>
          <Link
            key={item?.path}
            to={item?.path}
            onClick={handleNavClick}
            className={`font-poppins text-lg font-medium transition-all duration-300 py-3 px-4 rounded-lg ${
            isActivePath(item?.path) ?
            'bg-primary text-primary-foreground' :
            'text-foreground hover:bg-muted'}`
            }>

              {item?.label}
            </Link>
          )}

          <div className="pt-6 border-t border-border space-y-4">

              <a href="tel:+919559536662"
                variant="outline"
                size="default"
                iconName="Phone"
                iconPosition="left"
                className=" font-poppins border border-red-600 rounded-lg px-4 py-2 inline-block w-full text-center">

                Call Us
              </a>
           
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              fullWidth
               onClick={() => setOpenModal(true)}
              className="font-cta bg-amber-600 hover:bg-amber-700 text-white">

              Book Now
            </Button>
          </div>

          
        </nav>
         <BookingModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>

        
      </div>
    
    </>);

};

export default Header;