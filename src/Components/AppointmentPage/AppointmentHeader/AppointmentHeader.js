import React from 'react';
import './AppointmentHeader.css'
import chair from '../../../images/chair.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
  
  return (
    <div className='appointment-container'>
    <div style={{height:'100vh'}} className="row align-items-center">
      <div className="col-md-4 offset-1 ">
        <h1>Appointment</h1>
        <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
        
      </div>
      <div className="col-md-6  d-md-block ">
        <img src={chair} alt="" className="img-fluid" />
      </div>
    </div>
  </div>
  );
};

export default AppointmentHeader;