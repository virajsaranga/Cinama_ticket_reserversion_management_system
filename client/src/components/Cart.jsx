import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Cart(props) {
  const [bookings, setBookings] = useState([]);
  const [valid, setValid] = useState(false);
  const [pay, setPay] = useState(false);

  useEffect(() => {
    function getBookings() {
      axios
        .get("http://localhost:5000/api/bookings")
        .then((res) => {
          const results = res.data;
          setBookings(
            results.filter((result) => result.email === props.customerEmail)
          );
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBookings();
  }, []);

  function deleteBooking(_id) {
    axios
      .delete("http://localhost:5000/api/bookings/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("booking deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setBookings(bookings.filter((booking) => booking._id !== _id));
  }

  let sum = 0;

  bookings.forEach((booking) => {
    sum += Number(booking.price) * Number(booking.tickets);
  });

  function calculate() {
    setValid(true);
  }

  const [payment, setPayment] = useState({
    cardNumber: "",
    cvcNumber: "",
    amount: "",
    name: "",
    email: props.customerEmail,
  });

  function handlePayment() {
    setPay(true);
    setPayment((preValue) => {
      return {
        ...preValue,
        amount: sum,
      };
    });
  }

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/payments", payment)
      .then(() => {
        alert("payment successful");
      })
      .catch((err) => {
        alert(err);
      });

    setPayment({
      cardNumber: "",
      cvcNumber: "",
      amount: "",
      name: "",
      email: props.customerEmail,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setPayment((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {pay === false ? (
        <div className="all">
          <h2 className="heading">Booked Movies</h2>
          <p style={{ fontSize: "140%", fontWeight: "bold" }}>
            Your Email --- {props.customerEmail}
          </p>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">Movie Title</th>
                <th scope="col">Theater Name</th>
                <th scope="col">Show Date</th>
                <th scope="col">Show Time</th>
                <th scope="col">Ticket Price .Rs.</th>
                <th scope="col">No of Tickets</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-light">
              {bookings.map((booking, index) => {
                return (
                  <tr key={booking._id}>
                    <td>{booking.title}</td>
                    <td>{booking.theater}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.price}.00</td>
                    <td>{booking.tickets}</td>
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
                            deleteBooking(booking._id);
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

          <br />
          <button onClick={calculate}>
            <h5>
              <b>Calculate Total</b>
            </h5>
          </button>
          <br />
          <br />
          {valid && (
            <div>
              <h3>Total Price is : {sum}.00</h3>
              <br />
              <button onClick={handlePayment}>
                <h5>
                  <b>Make Payment</b>
                </h5>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="container">
          <div className="formStylePayment">
            <h2 className="heading" style={{ margin: "30px" }}>
              Enter payment details{" "}
            </h2>
            <p style={{ fontSize: "140%", fontWeight: "bold" }}>
              Your Email --- {props.customerEmail}
            </p>{" "}
            <p style={{ fontSize: "140%", fontWeight: "bold" }}>
              Amount --- Rs.{sum}.00
            </p>
            <form onSubmit={sendData}>
              <div className="form-group row">
                <label for="" className="col-sm-2 col-form-label">
                  Credit Card Number
                </label>

                <div className="col-sm-7">
                  <input
                    type="tel"
                    maxlength="19"
                    className="form-control"
                    id=""
                    name="cardNumber"
                    placeholder="enter your credit card number"
                    onChange={handleChange}
                    value={payment.cardNumber}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="" className="col-sm-2 col-form-label">
                  CVC Number
                </label>
                <div className="col-sm-7">
                  <input
                    type="tel"
                    maxlength="3"
                    className="form-control"
                    id=""
                    name="cvcNumber"
                    placeholder="enter CVC number"
                    onChange={handleChange}
                    value={payment.cvcNumber}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-7">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    name="name"
                    placeholder="enter your full name"
                    onChange={handleChange}
                    value={payment.name}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-secondary">
                    <b style={{ fontSize: "130%" }}>Pay</b>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
