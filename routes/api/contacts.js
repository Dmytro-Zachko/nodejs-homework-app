const express = require('express')
const router = express.Router()
const controller = require("../../controllers/contacts");
const { validatebody } = require("../../validate")
const Schema = require("../../schemas/ValidateSchema")

router.get("/", controller.getAll);

router.get("/:contactId", controller.getById);

router.post("/", validatebody(Schema.addSchema), controller.add);

router.delete("/:contactId", controller.deleteById);

router.put("/:contactId", validatebody(Schema.addSchema), controller.updateById);

module.exports = router
