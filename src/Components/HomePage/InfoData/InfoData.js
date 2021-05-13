import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'

const InfoData = () => {
  const data=[
    {
      title:'Opening hours',
      icon:faClock,
      background:'primary'
    },
    {
      title:'Visit our location',
      icon:faMapMarker,
      background:'dark'
    },
    {
      title:'Contact us now',
      icon:faPhone,
      background:'primary'
    }
  ]
  return (
    <div className='my-5'>
     <div className="d-flex justify-content-center">
     <div className="w-75 row">
        {
          data.map(data => <InfoCard data={data}></InfoCard>)
        }
      </div>
     </div>
    </div>
  );
};

export default InfoData;