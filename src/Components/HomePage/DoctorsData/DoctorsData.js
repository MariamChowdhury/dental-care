import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const DoctorsData = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-bastion-84175.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="my-5 py-5">
      <div className="container my-5">
        <h3 className="green-font text-center text-uppercase">Our Doctors</h3>
        <div className="row">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsData;
