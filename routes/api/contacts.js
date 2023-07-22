const express = require('express')
const router = express.Router()
const controller = require("../../controllers/contacts");
const { validatebody,validateFavorite} = require("../../validate");
const Schema = require("../../schemas/ValidateSchema")
const {isValidId} = require('../../middlewares')

router.get("/", controller.getAll);

router.get("/:contactId", isValidId,controller.getById);

router.post("/", validatebody(Schema.addSchema), controller.add);

router.delete("/:contactId", isValidId,controller.deleteById);

router.put("/:contactId", isValidId,validatebody(Schema.addSchema), controller.updateById);

router.patch("/:contactId/favorite", isValidId, validateFavorite(Schema.updateFavoriteSchema), controller.updateFavorite)

module.exports = router
