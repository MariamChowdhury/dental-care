import React from "react";
import "./infoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCard = ({ data }) => {
  console.log(data);
  return (
    <div className="col-md-4">
      <div>
        <div class={`my-3  card rounded data-${data.background}`}>
          <div class="row d-flex align-items-center">
            <div class="col-md-4 ">
              <FontAwesomeIcon className="data-icon ms-5" icon={data.icon} />
            </div>
            <div class="col-md-8 ">
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p>
                  <small>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, delectus?
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
