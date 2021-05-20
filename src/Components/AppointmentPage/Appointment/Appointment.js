import React, { useState } from "react";
import Footer from "../../SharedFiles/Footer/Footer";
import Navigation from "../../SharedFiles/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookingData from "../BookingData/BookingData";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navigation />
      <AppointmentHeader
        handleDateChange={handleDateChange}
      ></AppointmentHeader>
      <BookingData date={selectedDate}></BookingData>
      <Footer />
    </div>
  );
};

export default Appointment;
