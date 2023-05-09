import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    function getAdmins() {
      axios
        .get("http://localhost:5000/api/admin")
        .then((res) => {
          setAdmins(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAdmins();
  }, []);

  function deleteAdmin(_id) {
    axios
      .delete("http://localhost:5000/api/admin/" + _id)
      .then((res) => {
        alert("admin deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setAdmins(admins.filter((admin) => admin._id !== _id));
  }

  return (
    <div className="all">
      <h2 className="heading">All Admins Details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name</th>
            <th scope="col">Company Id</th>
            <th scope="col">NIC</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {admins.map((admin, index) => {
            return (
              <tr key={admin._id}>
                <td>{index + 1}</td>
                <td>{admin.fName}</td>
                <td>{admin.lName}</td>
                <td>{admin.companyId}</td>
                <td>{admin.nic}</td>
                <td>{admin.email}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/updateAdmin/${admin._id}`}
                  >
                    <EditIcon />
                    &nbsp;&nbsp; Update
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteAdmin(admin._id);
                    }}
                  >
                    <DeleteForeverIcon />
                    &nbsp;&nbsp; Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
