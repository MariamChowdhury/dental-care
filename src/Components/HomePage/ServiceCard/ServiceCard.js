import React from 'react';

const ServiceCard = ({data}) => {
  return (
    <div className="col-md-4 text-center ">
    
        <img style={{height:'50px'}} className='mt-4' src={data.img} alt="" />
        <h5 className='my-3'>{data.name}</h5>
        <p className='text-secondary'><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laboriosam.</small></p>
      </div>
    
  );
};

export default ServiceCard;