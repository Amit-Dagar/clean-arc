"use strict";

exports.getHealth = (req, res, next) => {
  res.status(200).json({
    message: "Server is up and running",
  });
};
