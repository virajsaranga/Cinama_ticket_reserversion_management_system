import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    function getPayments() {
      axios
        .get("http://localhost:5000/api/payments")
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getPayments();
  }, []);

  return (
    <div className="all">
      <h2 className="heading">Customers Payment Details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Email</th>
            <th scope="col">Credit card Number</th>
            <th scope="col">CVC Number</th>
            <th scope="col">Amount .Rs.</th>
          </tr>
        </thead>
        <tbody className="table-light">
          {payments.map((payment, index) => {
            return (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment.name}</td>
                <td>{payment.email}</td>
                <td>{payment.cardNumber}</td>
                <td>{payment.cvcNumber}</td>
                <td>{payment.amount}.00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
