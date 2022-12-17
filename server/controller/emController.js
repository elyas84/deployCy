const em = require("../model/em");
const EM = require("../model/em");

// GET all employees

exports.getEmployees = async (req, res) => {
  try {
    const emps = await EM.find();
    if (emps && emps.length === 0) {
      return res.status(404).json({
        message: "Sorry, there are no data stored.",
      });
    }
    res.status(200).json(emps);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

// POST an employee

exports.new = async (req, res) => {
  const {
    firstname,
    aftername,
    middlename,
    email,
    phone,
    department,
    experience,
    gender,
  } = req.body;
  try {
    let emp = await EM.findOne({ email });
    if (emp) {
      return res.status(400).json({
        message:
          "email must be unique, please contact with your manager to get new one",
      });
    }
    emp = new EM({
      firstname,
      aftername,
      middlename,
      email,
      phone,
      department,
      experience,
      gender,
    });
    await emp.save();
    res.status(201).json(emp);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const emp = await EM.findById(req.params.id);
    if (!emp) {
      return res.status(404).json({
        message: "There is no data stored",
      });
    }
    res.status(200).json(emp);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

// UPDATE an emp

exports.update = async (req, res) => {
  try {
    const emp = await EM.findById(req.params.id);
    if (!emp) {
      return res.status(404).json({
        message: "There is no data stored",
      });
    } else {
      emp.firstname = req.body.firstname || emp.firstname;
      emp.aftername = req.body.aftername || emp.aftername;
      emp.middlename = req.body.middlename || emp.middlename;
      emp.email = req.body.email || emp.email;
      emp.phone = req.body.phone || emp.phone;
      emp.department = req.body.department || emp.department;
      emp.experience = req.body.experience || emp.experience;

      await emp.save();
      res.status(200).json(emp);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

// DELETE

exports.delete = async (req, res) => {
  try {
    await EM.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "Employee has been deleted.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
