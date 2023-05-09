const Admin = require("../models/Admin.model");
const md5 = require("md5");

const addAdmin = (req, res) => {
  const { fName, lName, companyId, nic, email } = req.body;
  const password = md5(req.body.password);

  const admin = new Admin({
    fName,
    lName,
    companyId,
    nic,
    email,
    password,
  });

  admin
    .save()
    .then((createdAdmin) => {
      res.json(createdAdmin);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAdmin = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await Admin.findById(adminId);
    res.json(admin);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateAdmin = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json("There is no admin to update");
    }

    const { fName, lName, companyId, nic, email, password } = req.body;

    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, {
      fName,
      lName,
      companyId,
      nic,
      email,
      password,
    });

    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeAdmin = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await Admin.findById(adminId);

    if (!admin) {
      return res.status(404).json("There is no admin to remove");
    }

    const removedAdmin = await Admin.findByIdAndDelete(adminId);
    res.status(200).json(removedAdmin);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const validateAdmin = async (req, res) => {
  const mail = req.body.email;
  const pass = md5(req.body.password);

  try {
    const foundUser = await Admin.findOne({ email: mail });

    if (!foundUser) {
      return res.status(404).json("invalid user");
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
  addAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
  validateAdmin,
};
