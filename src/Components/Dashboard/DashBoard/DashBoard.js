import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../App";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import SideBar from "../SideBar/SideBar";

const containerStyle = {
  backgroundColor: "#F4FDFB",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("https://aqueous-bastion-84175.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [loggedInUser.email, selectedDate]);
  return (
    <section>
      <div style={containerStyle} className=" container-fluid row">
        <div className="col-md-3 col-sm-12">
          <SideBar></SideBar>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center py-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
        <div className="col-md-5 py-5 col-sm-12 ">
          <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
