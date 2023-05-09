import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

export default function Movies(props) {
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

  function filterData(movies, searchKey) {
    const result = movies.filter((movie) => {
      return movie.MovieTitle.toLowerCase().includes(searchKey);
    });

    setMovies(result);
  }

  function handleSearchArea(e) {
    const searchKey = e.target.value;

    axios.get("http://localhost:5000/api/movies").then((res) => {
      filterData(res.data, searchKey);
    });
  }

  return (
    <div className="movies">
      <h1 className="moviesHeading">Latest Movies</h1>

      <div
        class="input-group"
        style={{
          width: "17%",
          height: "30px",
          margin: "0px 40px 20px",
        }}
      >
        <input
          type="text"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={handleSearchArea}
        />
      </div>

      {movies.map((movie, index) => {
        return (
          <Movie
            key={index}
            title={movie.MovieTitle}
            cover={movie.CoverPhoto}
            desc={movie.desc}
            cast={movie.cast}
            theaterName={movie.theaterName}
            date={movie.date}
            time={movie.time}
            price={movie.price}
            cMail={props.customerEmail}
          />
        );
      })}
    </div>
  );
}
