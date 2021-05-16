import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/ap-banner.png'
const MakeAppointment = () => {
  return (
    <section className="make-appointment">
    <div className="container">
        <div className="row">
            <div className="col-md-5 d-none d-md-block">
                <img src={doctor} alt=""/>
            </div>
            <div className="col-md-7 py-5 px-5 ">
                <h5 className="text-uppercase green-font">Appointment</h5>
                <h1 className="my-4">Make an Appointment <br/> Today</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                <button className="btn green-color text-white">Learn More</button>
            </div>
        </div>
    </div>
</section>
  );
};

export default MakeAppointment;