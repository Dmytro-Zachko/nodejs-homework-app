const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  console.log(isValidObjectId(contactId));
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not correct type of ID`));
  }
  next();
};

module.exports = isValidId;