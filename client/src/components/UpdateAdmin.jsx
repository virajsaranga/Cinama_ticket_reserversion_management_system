import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "./App.css";

export default function UpdateAdmin() {
  const [admin, setAdmin] = useState({
    fName: "",
    lName: "",
    companyId: "",
    nic: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getAdmin() {
      axios
        .get(`http://localhost:5000/api/admin/${id}`)
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAdmin();
  }, []);

  function sendData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/admin/${id}`, admin)
      .then(() => {
        alert("admin updated");
        navigate("/admins");
      })
      .catch((err) => {
        alert(err);
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
          <h2 className="heading">Update Admin</h2>
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
                  type="text"
                  className="form-control"
                  id=""
                  name="email"
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
                  type="text"
                  className="form-control"
                  id=""
                  name="password"
                  onChange={handleChange}
                  value={admin.password}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-secondary">
                  <b style={{ fontSize: "130%" }}>Update</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
