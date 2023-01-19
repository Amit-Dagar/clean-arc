"use strict";
// import express and other dependencies
const express = require("express");
const app = express();

// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
require("dotenv").config();

// initialize mongodb
require("./Helpers/initMongoDB");

// cors
const cors = require("cors");
app.use(cors());

// routes
const HealthRoute = require("./Routes/Health.Route");
app.use("/health", HealthRoute);

// listen to port
app.listen(process.env.PORT, () => {
  console.log("----------------------------------------");
  // if DEBUG is on, then console.log will be on otherwise it will be off
  if (process.env.DEBUG === "on") {
    console.log(`🔥 Development mode is on`);
  } else {
    console.log(`🔥 Production mode is on`);
    console.log = function () {};
  }
  console.log(`✅ Express server connected on: ${process.env.PORT}`);
});
