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

const AppointmentForm = ({ closeModal, modalIsOpen, appointmentOn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center green-font my-2">{appointmentOn}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="name"
            className="my-2 form-control"
            placeholder="Enter Name"
            ref={register({ required: true })}
          />
          <input
            name="email"
            className="my-2 form-control"
            placeholder="Enter Email"
            ref={register({ required: true })}
          />
          <input
            name="number"
            className="my-2 form-control"
            placeholder="Enter Phone Number"
            ref={register({ required: true })}
          />
          <input
            name="age"
            className="my-2 form-control"
            placeholder="Enter Age"
            ref={register({ required: true })}
          />
          <input type="submit" className="btn green-color text-white" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
