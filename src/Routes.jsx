
 import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "././components/ScrollToTop"
import ErrorBoundary from "././components/ErrorBoundary"
import NotFound from "././pages/NotFound"
import Header from "./components/ui/Header"
import Footer from './components/ui/Footer';
import FacilitiesAndAmenities from './pages/facilities-amenities';
import ContactUs from './pages/contact-us';
import OurRooms from './pages/our-rooms';
import AboutUs from './pages/about-us';
import Homepage from './pages/homepage';

const Routes = () => {



  
    
  return (
      
    <BrowserRouter>
      <Header/>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
      
        <Route path="/" element={<Homepage />} />
       <Route path="/facilities-and-amenities" element={<FacilitiesAndAmenities />} />
       <Route path="/contact-us" element={<ContactUs />} /> 
       <Route path="/our-rooms" element={<OurRooms />} /> 
       <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
       
      </RouterRoutes>
      </ErrorBoundary>
           <Footer/>
    </BrowserRouter>
  );
};

export default Routes;
