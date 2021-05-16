import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookingData = ({date}) => {
  const data=[
    {
        "id" : 1,
        "subject" : "Teeth Orthodontics",
        "visitingHour" : "8:00 AM - 9:00 AM",
        "totalSpace" : 10
    },
    {
        "id" : 2,
        "subject" : "Cosmetic Dentistry",
        "visitingHour" : "10:50 AM - 11:30 AM",
        "totalSpace" : 10
    },
    {
        "id" : 3,
        "subject" : "Teeth Cleaning",
        "visitingHour" : "5:00 PM - 6:00 PM",
        "totalSpace" : 10
    },
    {
        "id" : 4,
        "subject" : "Cavity Protection",
        "visitingHour" : "7:00 AM - 8:30 AM",
        "totalSpace" : 10
    },
    {
        "id" : 5,
        "subject" : "Teeth Orthodontics",
        "visitingHour" : "8:00 AM - 9:00 AM" , 
        "totalSpace" : 10
    },
    {
        "id" : 6,
        "subject" : "Teeth Orthodontics",
        "visitingHour" : "8:00 AM - 9:00 AM" , 
        "totalSpace" : 10
    }

]
  return (
    <div>
      <h3 className='text-center green-font my-5'>Available Appointments on {date.toDateString()}</h3>
      <div className="container">
      <div className="row">
        {
          data.map(data => <BookingCard data={data} date={date} key={data.id}></BookingCard>)
        }
      </div>
      </div>
    </div>
  );
};

export default BookingData;