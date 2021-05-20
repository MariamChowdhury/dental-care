import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ closeModal, modalIsOpen, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();
    fetch("https://aqueous-bastion-84175.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Appointment created successfully.");
          closeModal();
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center green-font my-2 mb-4 p-2">
          {appointmentOn}
        </h2>
        <p className="text-secondary text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="my-2 form-control mb-3"
            placeholder="Enter Name"
            ref={register({ required: true })}
          />
          <input
            name="email"
            className="my-2 form-control mb-3"
            placeholder="Enter Email"
            ref={register({ required: true })}
          />
          <input
            name="number"
            className="my-2 form-control mb-3"
            placeholder="Enter Phone Number"
            ref={register({ required: true })}
          />
          <input
            name="age"
            className="my-2 form-control mb-3"
            placeholder="Enter Age"
            ref={register({ required: true })}
          />
          <input
            type="submit"
            className="btn green-color text-white mb-3 fw-bold"
          />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
