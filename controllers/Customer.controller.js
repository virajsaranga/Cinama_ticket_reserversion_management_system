const Customer = require("../models/Customer.model");
const md5 = require("md5");

const addCustomer = (req, res) => {
  const { fName, lName, phone, email } = req.body;
  const password = md5(req.body.password);

  const customer = new Customer({
    fName,
    lName,
    phone,
    email,
    password,
  });

  customer
    .save()
    .then((createdCustomer) => {
      res.json(createdCustomer);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getCustomer = async (req, res) => {
  const cusId = req.params.id;

  try {
    const customer = await Customer.findById(cusId);
    res.json(customer);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCustomer = async (req, res) => {
  const cusId = req.params.id;

  try {
    const customer = await Customer.findById(cusId);

    if (!customer) {
      return res.status(404).json("There is no customer to update");
    }

    const { fName, lName, phone, email, password } = req.body;

    const updatedCustomer = await Customer.findByIdAndUpdate(cusId, {
      fName,
      lName,
      phone,
      email,
      password,
    });

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeCustomer = async (req, res) => {
  const cusId = req.params.id;

  try {
    const customer = await Customer.findById(cusId);

    if (!customer) {
      return res.status(404).json("There is no customer to remove");
    }

    const removedCustomer = await Customer.findByIdAndDelete(cusId);
    res.status(200).json(removedCustomer);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateCustomer = async (req, res) => {
  const mail = req.body.email;
  const pass = md5(req.body.password);

  try {
    const foundUser = await Customer.findOne({ email: mail });

    if (!foundUser) {
      return res.status(404).json("invalid customer");
    } else if (foundUser.password === pass) {
      return res.status(200).json(true);
    } else {
      return res.status(404).json("incorrect password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  removeCustomer,
  validateCustomer,
};
