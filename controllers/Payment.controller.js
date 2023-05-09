const Payment = require("../models/Payment.model");
var nodemailer = require("nodemailer");

const addPayment = (req, res) => {
  const { cardNumber, amount, cvcNumber, name, email } = req.body;

  const payment = new Payment({
    cardNumber,
    amount,
    cvcNumber,
    name,
    email,
  });

  payment
    .save()
    .then((createdPayment) => {
      res.json(createdPayment);
    })
    .catch((error) => {
      res.status(400).json(error);
    });

  //send email to relevant customer
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dmrwijerathne@gmail.com",
      pass: "dmrw98629",
    },
  });

  var mailOptions = {
    from: "dmrwijerathne@gmail.com",
    to: email,
    subject: "Payment Successfull",
    text: `Hi ${name} you have succesfully payed. Your amount is Rs.${amount}.00`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addPayment,
  getPayments,
};
