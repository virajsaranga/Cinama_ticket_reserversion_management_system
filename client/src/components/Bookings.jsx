import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    function getBookings() {
      axios
        .get("http://localhost:5000/api/bookings")
        .then((res) => {
          setBookings(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBookings();
  }, []);

  return (
    <div className="all">
      <h2 className="heading">All movie tickets bookings details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Movie Title</th>
            <th scope="col">Movie Theater</th>
            <th scope="col">Show Date</th>
            <th scope="col">Show Time</th>
            <th scope="col">Ticket Price .Rs.</th>
            <th scope="col">No of Tickets</th>
          </tr>
        </thead>
        <tbody className="table-light">
          {bookings.map((booking, index) => {
            return (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.email}</td>
                <td>{booking.title}</td>
                <td>{booking.theater}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.price}.00</td>
                <td>{booking.tickets}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
