import React from 'react';
import cavity from '../../../images/tooth (1).png'
import fluoride from '../../../images/001-dental.png'
import teeth from '../../../images/tooth.png'
import ServiceCard from '../ServiceCard/ServiceCard';
const ServiceData = () => {
  const data =[
    {
      img:fluoride,
      name:'Fluoride Treatment'
    },
    {
      img:cavity,
      name:'Cavity Filling'
    },
    {
      img:teeth,
      name:'Teeth Whitening'
    }
  ]
  return (
    <div className='my-5'>
      <div className='text-center my-5'>
        <h5 className='green-font'>OUR SERVICES</h5>
        <h1>Services We Provide</h1>
      </div>
     <div className="d-flex justify-content-center py-5">
     <div className="w-75 row ">
        {
          data.map(data => <ServiceCard data={data}></ServiceCard>)
        }
      </div>
     </div>
    </div>
  );
};

export default ServiceData;