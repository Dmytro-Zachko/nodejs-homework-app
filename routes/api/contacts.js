const express = require('express')
const router = express.Router()
const ctrl = require("../../controllers/contacts")
const {validatebody, addSchema} =  require("../../validate")

router.get('/', ctrl.getAll)

router.get('/:id', ctrl.getById)

router.post('/', validatebody(addSchema),ctrl.add)

router.delete('/:id', ctrl.deleteById)

router.put('/:id', validatebody(addSchema),ctrl.updateById)

module.exports = router
