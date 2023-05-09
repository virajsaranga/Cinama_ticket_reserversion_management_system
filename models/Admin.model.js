const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  fName: String,
  lName: String,
  companyId: String,
  nic: String,
  email: String,
  password: String,
});

module.exports = Admin = mongoose.model("Admin", adminSchema);
