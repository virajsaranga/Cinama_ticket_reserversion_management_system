import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

export default function ManageMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    function getMovies() {
      axios
        .get("http://localhost:5000/api/movies")
        .then((res) => {
          setMovies(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMovies();
  }, []);

  function deleteMovie(_id) {
    axios
      .delete("http://localhost:5000/api/movies/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("movie deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setMovies(movies.filter((movie) => movie._id !== _id));
  }

  return (
    <div className="all">
      <div>
        <a href="/addMovie">
          <button type="button" className="btn btn-secondary">
            <b style={{ fontSize: "130%" }}>Add new movie</b>
          </button>
        </a>
      </div>
      <h2 className="heading">All Movies Details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Movie Title</th>
            <th scope="col">Theater Name</th>
            <th scope="col">Ticket Price .Rs.</th>
            <th scope="col">Show Date</th>
            <th scope="col">Show Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {movies.map((movie, index) => {
            return (
              <tr key={movie._id}>
                <td>{index + 1}</td>
                <td>{movie.MovieTitle}</td>
                <td>{movie.theaterName}</td>
                <td>{movie.price}.00</td>
                <td>{movie.date}</td>
                <td>{movie.time}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/updateMovie/${movie._id}`}
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
                        deleteMovie(movie._id);
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
