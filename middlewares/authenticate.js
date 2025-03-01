const { HttpError } = require("../helpers")
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env
const { User } = require('../models/users')


const authenticate = async (req, res, next) => {
   const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not Authorized"));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not Authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Not Authorized"));
  }
};
module.exports = authenticate;