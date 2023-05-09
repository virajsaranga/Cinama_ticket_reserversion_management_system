const Movie = require("../models/Movie.model");

const addMovie = (req, res) => {
  const { MovieTitle, CoverPhoto, desc, cast, theaterName, date, time, price } =
    req.body;

  const movie = new Movie({
    MovieTitle,
    CoverPhoto,
    desc,
    cast,
    theaterName,
    date,
    time,
    price,
  });

  movie
    .save()
    .then((createdMovie) => {
      res.json(createdMovie);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findById(movieId);
    res.json(movie);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json("There is no movie to update");
    }

    const {
      MovieTitle,
      CoverPhoto,
      desc,
      cast,
      theaterName,
      date,
      time,
      price,
    } = req.body;

    const updatedMovie = await Movie.findByIdAndUpdate(movieId, {
      MovieTitle,
      CoverPhoto,
      desc,
      cast,
      theaterName,
      date,
      time,
      price,
    });

    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeMovie = async (req, res) => {
  const movieId = req.params.id;

  try {
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json("There is no movie to remove");
    }

    const removedMovie = await Movie.findByIdAndDelete(movieId);
    res.status(200).json(removedMovie);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addMovie,
  getMovies,
  getMovie,
  updateMovie,
  removeMovie,
};
