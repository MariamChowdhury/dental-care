import React from 'react';
import './HeaderMain.css'
import chair from '../../../images/banner-img.png'

const HeaderMain = () => {
  return (
    <div className='header-container'>
      <div style={{height:'100vh'}} className="row align-items-center">
        <div className="col-md-4 offset-1 ">
          <h1>Your new smile <br />Starts here</h1>
          <h5 className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam totam vero itaque, debitis eligendi voluptatem.</h5>
          <button className="btn blue-color text-white">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6  d-none d-md-block ">
          <img src={chair} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;