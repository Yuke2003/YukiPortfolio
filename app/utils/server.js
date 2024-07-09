const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const DB = process.env.MongoDB;

mongoose.set("strictQuery", false);

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(cookieParser());

const connectDB = async () => {
  try {
    const con = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successful");
    return con;
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
