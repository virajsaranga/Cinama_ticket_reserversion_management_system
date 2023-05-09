import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Cart from "./Cart";

function CartLogin() {
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
          <h4 style={{ textAlign: "center", marginBottom: "40px" }}>
            Enter your login details again for view the cart and make necessary
            payments
          </h4>
          <div className="loginForm">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Cart customerEmail={customer.email} />
      )}
    </div>
  );
}

export default CartLogin;
