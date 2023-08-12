const express = require('express')
const router = express.Router()
const controller = require("../../controllers/contacts");
const { validatebody,validateFavorite} = require("../../validate");
const Schema = require("../../schemas/ValidateSchema")
const {isValidId, authenticate,upload} = require('../../middlewares')
const fs = require('fs/promises')
const path = require("path")

router.get("/", authenticate,controller.getAll);

router.get("/:contactId", authenticate, isValidId, controller.getById);

router.post("/", upload.single("cover"), authenticate, validatebody(Schema.addSchema), controller.add)

router.delete("/:contactId", authenticate, isValidId, controller.deleteById);

router.put("/:contactId", authenticate,isValidId,validatebody(Schema.addSchema), controller.updateById);

router.patch("/:contactId/favorite", authenticate,isValidId, validateFavorite(Schema.updateFavoriteSchema), controller.updateFavorite)

module.exports = router
