const express = require('express')
const { validatebody} = require("../../validate");
const Schema = require("../../schemas/UserSchemas")
const ctrl = require('../../controllers/auth');
const { authenticate,upload } = require('../../middlewares');
const router = express.Router()

router.post("/register", validatebody(Schema.registerSchema),ctrl.register )

router.post("/login", validatebody(Schema.registerSchema),ctrl.login)

router.get("/current",  authenticate,ctrl.getCurrent)

router.post('/logout', authenticate, ctrl.logout)

router.patch("/", authenticate, validatebody(Schema.subscriptionSchema),ctrl.updateSubscription)

router.patch('/avatars', authenticate, ctrl.updateAvatar, upload.single('avatar'))

module.exports = router