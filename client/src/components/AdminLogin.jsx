import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function AdminLogin() {
  const [valid, setValid] = useState(false);
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/admin/validate", admin)
      .then((res) => {
        if (res.status === 200) {
          alert("admin validated");
          setValid(res.data);

          navigate("/manageMovies");
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");

        setValid(false);
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
      <div className="container mt-5">
        <div className="loginForm">
          <h1>Movie Admin Login</h1>

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
                        value={admin.email}
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
                        value={admin.password}
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
    </div>
  );
}

export default AdminLogin;
