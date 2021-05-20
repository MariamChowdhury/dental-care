import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <div>
      <table className="table table-striped table-borderless my-5 text-center">
        <thead>
          <tr>
            <th className="text-secondary" scope="col">
              Name
            </th>
            <th className="text-secondary" scope="col">
              Phone
            </th>
            <th className="text-secondary" scope="col">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr>
              <td>{appointment.name}</td>
              <td>{appointment.number}</td>
              <td>{appointment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentShortList;
