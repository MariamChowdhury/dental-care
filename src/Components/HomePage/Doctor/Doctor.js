import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 my-5">
      <div className="card border-0">
        {doctor.image ? (
          <img src={`data:image/png;base64,${doctor.image.img}`} alt="" />
        ) : (
          <img
            className="mb-3"
            src={`https://aqueous-bastion-84175.herokuapp.com/${doctor.img}`}
            alt=""
          />
        )}
        <div class="card-body text-center">
          <h5 class="card-title">{doctor.name}</h5>
          <div class="card-text my-3">
            <p>{doctor.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
