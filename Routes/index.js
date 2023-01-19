"use strict";
const router = require("express").Router();
const { catchAsync } = require("../Helpers/ExpressHelper");

// Application Routes
const HealthRoute = require("./Health.Route");

// Health
router.use("/health", catchAsync(HealthRoute));

module.exports = router;
