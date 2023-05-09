const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB Connected");
});

app.use("/api/movies", require("./routes/Movie.route"));
app.use("/api/admin", require("./routes/Admin.route"));
app.use("/api/customers", require("./routes/Customer.route"));
app.use("/api/bookings", require("./routes/Book.route"));
app.use("/api/payments", require("./routes/Payment.route"));

//deploy code

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
