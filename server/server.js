require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
const path = require('path')

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



// Depyoment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(path.resolve(), "client", "build", "index.html")); //relative path
  });
}


app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
