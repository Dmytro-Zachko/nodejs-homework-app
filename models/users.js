const { Schema, model } = require("mongoose")
const { handleMonggoseError } = require('../helpers')

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const UserSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Set password for user'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
      unique: true,
    match: emailRegexp
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  avatarURL: {
    type: String,
    required: true  
  },
  token: String
}, { versionKey: false, timestamps: true })

UserSchema.post('save', handleMonggoseError)

const User = model("user", UserSchema)

module.exports = {
    User,
UserSchema}