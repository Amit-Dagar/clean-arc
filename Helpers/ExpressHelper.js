"use strict";

exports.catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

exports.errorHandler = (err, req, res, next) => {
  console.log("🔥 Error: ", err);
  res.status(500).send({ error: err.message });
};
