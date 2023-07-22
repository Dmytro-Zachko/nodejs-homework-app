const express = require('express')
const { validatebody} = require("../../validate");
const Schema = require("../../schemas/UserSchemas")
const ctrl = require('../../controllers/auth')
const router = express.Router()

router.post("/register", validatebody(Schema.registerSchema),ctrl.register )

module.exports = router