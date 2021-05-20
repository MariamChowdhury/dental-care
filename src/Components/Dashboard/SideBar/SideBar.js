import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PeopleIcon from "@material-ui/icons/People";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { UserContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://aqueous-bastion-84175.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, [loggedInUser.email]);
  return (
    <div className="sidebar-container">
      <div className="p-5 my-5 sidebar-content">
        <div className="mt-5 ">
          <Link to="/appointments">
            {" "}
            <p>
              <AssignmentIndIcon /> Appointments
            </p>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/patient">
            <p>
              <PeopleIcon /> Patients
            </p>
          </Link>
        </div>
        {isDoctor && (
          <div className="mt-5">
            <Link to="/addADoctor">
              <p>
                <LocalHospitalIcon />
                Add doctor
              </p>
            </Link>
          </div>
        )}
        <div className="mt-5 ">
          <Link onClick={() => setLoggedInUser({})}>
            {" "}
            <p>
              {" "}
              <ExitToAppIcon /> Log Out
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
