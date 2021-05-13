import React from 'react';
import './Home.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import InfoData from '../InfoData/InfoData';
import ServiceData from '../ServiceData/ServiceData';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HeaderMain />
      <InfoData />
      <ServiceData />
    </div>
  );
};

export default Home;