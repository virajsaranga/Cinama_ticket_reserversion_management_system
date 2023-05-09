const Book = require("../models/Book.model");

const addBooking = (req, res) => {
  const { email, title, theater, date, time, price, tickets } = req.body;

  const book = new Book({
    email,
    title,
    theater,
    date,
    time,
    price,
    tickets,
  });

  book
    .save()
    .then((createdBooking) => {
      res.json(createdBooking);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Book.find();
    res.json(bookings);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getBooking = async (req, res) => {
  const bookId = req.params.id;

  try {
    const booking = await Book.findById(bookId);
    res.json(booking);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateBooking = async (req, res) => {
  const bookId = req.params.id;

  try {
    const booking = await Book.findById(bookId);

    if (!booking) {
      return res.status(404).json("There is no booking to update");
    }

    const { email, title, theater, date, time, price, tickets } = req.body;

    const updatedBooking = await Book.findByIdAndUpdate(bookId, {
      email,
      title,
      theater,
      date,
      time,
      price,
      tickets,
    });

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeBooking = async (req, res) => {
  const bookId = req.params.id;

  try {
    const booking = await Book.findById(bookId);

    if (!booking) {
      return res.status(404).json("There is no booking to remove");
    }

    const removedBooking = await Book.findByIdAndDelete(bookId);
    res.status(200).json(removedBooking);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addBooking,
  getBookings,
  getBooking,
  updateBooking,
  removeBooking,
};
