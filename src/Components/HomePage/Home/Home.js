import React from 'react';
import './Home.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../../SharedFiles/Navigation/Navigation';
import InfoData from '../InfoData/InfoData';
import ServiceData from '../ServiceData/ServiceData';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import TestimonialData from '../TestimonialData/TestimonialData';
import BlogData from '../BlogData/BlogData';
import DoctorsData from '../DoctorsData/DoctorsData';
import Contact from '../Contact/Contact';
import Footer from '../../SharedFiles/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeaderMain />
      <InfoData />
      <ServiceData />
      <FeaturedServices />
      <MakeAppointment />
      <TestimonialData />
      <BlogData />
      <DoctorsData />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;