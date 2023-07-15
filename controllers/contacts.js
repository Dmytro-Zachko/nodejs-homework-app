const constacts = require("../models/contacts")
const { HttpError,ctrlWrapper } = require("../helpers")

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