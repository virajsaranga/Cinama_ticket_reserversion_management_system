import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

function AddMovie() {
  const [movie, setMovie] = useState({
    MovieTitle: "",
    CoverPhoto: "",
    desc: "",
    cast: "",
    theaterName: "",
    date: "",
    time: "",
    price: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/movies", movie)
      .then(() => {
        alert("movie added");
        navigate("/manageMovies");
      })
      .catch((err) => {
        alert(err);
      });

    setMovie({
      MovieTitle: "",
      CoverPhoto: "",
      desc: "",
      cast: "",
      theaterName: "",
      date: "",
      time: "",
      price: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMovie((preValue) => {
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
          <h2 className="heading">Add New Movie</h2>
          <form onSubmit={sendData}>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Movie Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="MovieTitle"
                  placeholder="enter movie title"
                  onChange={handleChange}
                  value={movie.MovieTitle}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Cover Photo
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="CoverPhoto"
                  placeholder="paste cover photo url"
                  onChange={handleChange}
                  value={movie.CoverPhoto}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Cast
              </label>
              <div className="col-sm-10">
                <input
                  maxlength="50"
                  type="text"
                  className="form-control"
                  id=""
                  name="cast"
                  placeholder="enter cast details"
                  onChange={handleChange}
                  value={movie.cast}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Theater Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="theaterName"
                  placeholder="enter theater name"
                  onChange={handleChange}
                  value={movie.theaterName}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Ticket Price
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id=""
                  name="price"
                  placeholder="enter ticket price for one person"
                  onChange={handleChange}
                  value={movie.price}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  className="form-control"
                  id=""
                  name="date"
                  onChange={handleChange}
                  value={movie.date}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Time
              </label>
              <div className="col-sm-10">
                <input
                  type="time"
                  className="form-control"
                  id=""
                  name="time"
                  onChange={handleChange}
                  value={movie.time}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="" className="col-sm-2 col-form-label">
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  maxlength="200"
                  type="text"
                  className="form-control"
                  id=""
                  name="desc"
                  placeholder="enter movie description"
                  onChange={handleChange}
                  value={movie.desc}
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-secondary">
                  <b style={{ fontSize: "130%" }}>Submit</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovie;
