import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar/SideBar";

const AddDoctor = () => {
  const containerStyle = {
    backgroundColor: "#F4FDFB",
  };

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    console.log(info);
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("https://aqueous-bastion-84175.herokuapp.com/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={containerStyle} className=" container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9 my-5">
          <h5 className="green-font text-center mb-4">Add a Doctor</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-3">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Upload a image</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Picture"
              />
            </div>
            <button
              type="submit"
              className="btn green-color fw-bold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
