const mongoose = require("mongoose");

const emSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      max: 300,
      required: true,
    },
    aftername: {
      type: String,
      max: 300,
      required: true,
      unique: true,
    },
    middlename: {
      type: String,
      max: 300,
    },
    email: {
      type: String,
      max: 300,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    department: {
      type: String,
      required: true,
      min: 5,
      max: 400,
    },
    gender: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
      min: 0,
      max: 50,
    },
    avatar: {
      type: String,
      default: "",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Employee", emSchema);
