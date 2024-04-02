const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "awestgrdhfs" || process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
