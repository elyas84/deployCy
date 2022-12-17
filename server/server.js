require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");

// mddileware
app.use(express.json());
app.use(morgan("dev"));

// DB
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbConn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB || process.env.DB_CONNECTION);
    console.log("DB connected...");
  } catch (error) {
    console.log(error);
  }
};

dbConn();

// api

const emplRouter = require("./route/emRoutes");
app.use("/api/empls", emplRouter);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
