const { HttpError } = require("../helpers")

const validateFavorite = (schema) => {
  return (req, __, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing field favorite"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
};

module.exports = validateFavorite