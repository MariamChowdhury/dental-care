import React from 'react';

const Testimonial = ({Data}) => {
  return (
    <div className="card shadow mx-2 my-5">
            <div class="card-body">
                <p class="card-text text-center p-3 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem quidem fugiat vitae natus quod vero sunt possimus quo unde!</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={Data.img} alt="" width="60"/>
                <div>
                    <h6 className="blue-font">{Data.name}</h6>
                    <p className="m-0">{Data.location}</p>
                </div>
            </div>
       </div>
  );
};

export default Testimonial;