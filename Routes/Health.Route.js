"use strict";
const router = require("express").Router();
const { catchAsync } = require("../Helpers/ExpressHelper");
const Controller = require("../Controllers/Health.Controller");

// Get server health
router.get("/", catchAsync(Controller.getHealth));

module.exports = router;
