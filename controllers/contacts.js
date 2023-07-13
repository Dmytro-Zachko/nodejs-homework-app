const constacts = require("../models/contacts")
const Joi = require('joi')
const { HttpError,ctrlWrapper } = require("../helpers")

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
})

const getAll = async (req, res) => {
  
    const result = await constacts.listContacts()
  res.json(result)
 
}
const getById =async (req, res) => {
  
    const { id } = req.params;
    const result = await constacts.getContactById(id)
    if (!result) {
     throw HttpError(404, "Not found") 
    }
    res.json(result)
}
const add =  async (req, res) => {

  const {error} = addSchema.validate(req.body)
  if (error) {
     throw HttpError(400, "missing required name field") 
    }
  const result = await constacts.addContact(req.body)
  res.status(201).json(result)

}
const deleteById =  async (req, res) => {
  
     const { id } = req.params;
    const result = await constacts.removeContact(id)
     if (!result) {
     throw HttpError(404, "Not found") 
    }
    res.status(200).json({
      message: "contact deleted"
    })
 
}
const updateById = async (req, res) => {
  
    const {error} = addSchema.validate(req.body)
  if (error) {
     throw HttpError(400, "missing fields") 
    }
     const { id } = req.params;
    const result = await constacts.updateById(id,req.body)
     if (!result) {
     throw HttpError(404, "Not found") 
    }
    res.json(result)
 
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById:  ctrlWrapper(getById),
    add:  ctrlWrapper(add),
    deleteById:  ctrlWrapper(deleteById),
    updateById:  ctrlWrapper(updateById)
}