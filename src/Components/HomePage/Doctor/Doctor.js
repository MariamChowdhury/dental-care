import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctor = ({ data }) => {
  return (
    <div className="col-md-4 my-5">
      <div className="card border-0">
        <img src={data.img} class="card-img-top" alt="..." />
        <div class="card-body text-center">
          <h5 class="card-title">{data.name}</h5>
          <div class="card-text my-3">
          <p><FontAwesomeIcon icon={data.icon} className='green-font' />  {data.number}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
