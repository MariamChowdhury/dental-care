import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({ data, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="col-md-4 my-5">
      <div class="card shadow text-center p-2">
        <div class="card-body">
          <h5 class="card-title green-font">{data.subject}</h5>
          <p class="card-text">{data.visitingHour}</p>
          <p className="text-secondary">
            <small>{data.totalSpace} spaces available</small>
          </p>
          <button
            onClick={openModal}
            className="btn green-color text-white fw-bold"
          >
            BOOK APPOINTMENT
          </button>
          <AppointmentForm
            closeModal={closeModal}
            date={date}
            appointmentOn={data.subject}
            modalIsOpen={modalIsOpen}
          ></AppointmentForm>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
