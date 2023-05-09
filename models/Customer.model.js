const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  fName: String,
  lName: String,
  phone: String,
  email: String,
  password: String,
});

module.exports = Customer = mongoose.model("Customer", customerSchema);
