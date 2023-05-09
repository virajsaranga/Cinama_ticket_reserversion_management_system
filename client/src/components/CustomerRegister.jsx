import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function CustomerRegister() {
  const [customer, setCustomer] = useState({
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/customers", customer)
      .then(() => {
        alert("successfully registerd");
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });

    setCustomer({
      fName: "",
      lName: "",
      phone: "",
      email: "",
      password: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer((preValue) => {
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
          <h2 className="heading">Customer Registration</h2>
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
                  value={customer.fName}
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
                  value={customer.lName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  name="phone"
                  placeholder="enter phone number"
                  onChange={handleChange}
                  value={customer.phone}
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
                  value={customer.email}
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
                  value={customer.password}
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

export default CustomerRegister;
