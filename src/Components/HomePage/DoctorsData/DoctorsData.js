import React from 'react';
import doc from '../../../images/doctor-sm.png'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Doctor from '../Doctor/Doctor';

const DoctorsData = () => {
  const data=[
    {
      name:'Doctor White',
      img:doc,
      icon:faPhoneAlt,
      number: '0019273811'
    },
    {
      name:'Doctor White',
      img:doc,
      icon:faPhoneAlt,
      number: '0019273811'
    },
    {
      name:'Doctor White',
      img:doc,
      icon:faPhoneAlt,
      number: '0019273811'
    }
  ]
  return (
    <div className='my-5 py-5'>
      <div className="container my-5">
        <h3 className='blue-font text-center text-uppercase'>Our Doctors</h3>
        <div className="row">
          {
            data.map(data => <Doctor data={data}></Doctor>)
          }
        </div>
      </div>
    </div>
  );
};

export default DoctorsData;