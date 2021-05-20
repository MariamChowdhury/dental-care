import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import AllPatientTable from "./AllPatientTable";

const Patient = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
  };

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-bastion-84175.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [appointments]);
  return (
    <div style={containerStyle}>
      <div className="container-fluid row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div
          className="col-md-9 mt-5 mb-3"
          style={{ backgroundColor: "white" }}
        >
          <h5 className="green-font m-5 text-center">All Patients</h5>
          <AllPatientTable appointments={appointments}></AllPatientTable>
        </div>
      </div>
    </div>
  );
};

export default Patient;
