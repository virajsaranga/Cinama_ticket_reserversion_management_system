import React, { useState } from "react";
import axios from "axios";

export default function Movie(props) {
  const [booking, setBooking] = useState({
    email: props.cMail,
    title: props.title,
    theater: props.theaterName,
    date: props.date,
    time: props.time,
    price: props.price,
    tickets: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setBooking((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/bookings", booking)
      .then(() => {
        alert("booking added");
      })
      .catch((err) => {
        alert(err);
      });

    setBooking({
      email: props.cMail,
      title: props.title,
      theater: props.theaterName,
      date: props.date,
      time: props.time,
      price: props.price,
      tickets: "",
    });
  }

  return (
    <div className="note">
      <img className="MovieCover" src={props.cover} />
      <div className="MovieDesc">
        <h1 className="MovieHeading">{props.title}</h1>
        <p>
          <b>{props.desc}</b>
        </p>
        <p>
          <b>{props.cast}</b>
        </p>
        <p>
          Theater Name -- <b>{props.theaterName}</b>
        </p>
        <p>
          Ticket Price -- <b>Rs.{props.price}.00</b>
        </p>
        <p>
          Show Date -- <b>{props.date}</b>
        </p>
        <p>
          Show Time -- <b>{props.time}</b>
        </p>
        <form onSubmit={sendData}>
          <input
            type="number"
            placeholder="Enter No of tickets do you want"
            style={{ width: "70%" }}
            name="tickets"
            onChange={handleChange}
            value={booking.tickets}
            required
          />
          <button type="submit" style={{ fontSize: "120%" }}>
            <b>Book</b>
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}
