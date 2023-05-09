import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Movies from "./Movies";

function CustomerLogin() {
  const [valid, setValid] = useState(false);
  const [customer, setCustomer] = useState({
    email: "",
    password: "",
  });

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/customers/validate", customer)
      .then((res) => {
        if (res.status === 200) {
          alert("customer validated");
          setValid(res.data);
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");

        setValid(false);
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
      {valid === false ? (
        <div className="container mt-5">
          <div className="loginForm">
            <h1>Customer Login</h1>

            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={sendData}>
                      <div className="form-group">
                        <label for="id">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={customer.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={customer.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn btn-dark">
                        Login
                      </button>
                    </form>
                    <br />
                    <br />

                    <div>
                      <label for="password">
                        If you don't have an account click to
                      </label>
                      &nbsp;&nbsp;
                      <a href="/addCustomer">Register</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Movies customerEmail={customer.email} />
      )}
    </div>
  );
}

export default CustomerLogin;
