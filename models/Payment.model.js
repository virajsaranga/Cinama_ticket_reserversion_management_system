const mongoose = require("mongoose");
const { Schema } = mongoose;

const paymentSchema = new Schema({
  cardNumber: String,
  amount: String,
  cvcNumber: String,
  name: String,
  email: String,
});

module.exports = Payment = mongoose.model("Payment", paymentSchema);
