import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  console.log(appointments);
  return (
    <div className="container">
      <h1 className="text-center green-font">
        Total appointments: {appointments.length}
      </h1>
      {appointments.length ? (
        <AppointmentShortList
          appointments={appointments}
        ></AppointmentShortList>
      ) : (
        <div className="p-5">
          <h4 className="green-font text-center">
            No Appointment for this Date
          </h4>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
