import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
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

  const { id } = useParams();

  useEffect(() => {
    function getMovie() {
      axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then((res) => {
          setMovie(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMovie();
  }, []);

  function sendData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then(() => {
        alert("movie updated");
        navigate("/manageMovies");
      })
      .catch((err) => {
        alert(err);
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
          <h2 className="heading">Update Movie</h2>
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
                  type="text"
                  className="form-control"
                  id=""
                  name="cast"
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
                  type="text"
                  maxlength="200"
                  className="form-control"
                  id=""
                  name="desc"
                  onChange={handleChange}
                  value={movie.desc}
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

export default AddMovie;
