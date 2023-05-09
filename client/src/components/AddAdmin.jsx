import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function AddAdmin() {
  const [admin, setAdmin] = useState({
    fName: "",
    lName: "",
    companyId: "",
    nic: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/admin", admin)
      .then(() => {
        alert("successfully registerd");
        navigate("/admins");
      })
      .catch((err) => {
        alert(err);
      });

    setAdmin({
      fName: "",
      lName: "",
      companyId: "",
      nic: "",
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setAdmin((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="container">
        <div className="formStyle">
          <h2 className="heading">Admin Registration</h2>
          <form onSubmit={sendData}>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="fName"
                  placeholder="enter first name"
                  onChange={handleChange}
                  value={admin.fName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="lName"
                  placeholder="enter last name"
                  onChange={handleChange}
                  value={admin.lName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Company Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="companyId"
                  placeholder="enter company id"
                  onChange={handleChange}
                  value={admin.companyId}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                NIC
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="nic"
                  placeholder="enter nic"
                  onChange={handleChange}
                  value={admin.nic}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id=""
                  name="email"
                  placeholder="enter email"
                  onChange={handleChange}
                  value={admin.email}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id=""
                  name="password"
                  placeholder="enter password"
                  onChange={handleChange}
                  value={admin.password}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-secondary">
                  <b style={{ fontSize: "130%" }}>Submit</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
