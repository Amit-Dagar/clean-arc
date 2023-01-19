exports.getIp = function (req) {
  return req.headers["x-forwarded-for"] || req.connection.remoteAddress;
};
