import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    function getCustomers() {
      axios
        .get("http://localhost:5000/api/customers")
        .then((res) => {
          setCustomers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getCustomers();
  }, []);

  function deleteCustomer(_id) {
    axios
      .delete("http://localhost:5000/api/customers/" + _id)
      .then((res) => {
        alert("customer deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setCustomers(customers.filter((customer) => customer._id !== _id));
  }

  return (
    <div className="all">
      <h2 className="heading">All Customers Details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {customers.map((customer, index) => {
            return (
              <tr key={customer._id}>
                <td>{index + 1}</td>
                <td>{customer.fName}</td>
                <td>{customer.lName}</td>
                <td>{customer.phone}</td>
                <td>{customer.email}</td>
                <td>
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteCustomer(customer._id);
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
