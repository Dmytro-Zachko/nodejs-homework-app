const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()
const ContactsRouter = require('./routes/api/contacts')
const UsersRouter = require('./routes/api/users')
const app = express()


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json())
app.use(express.static("public"));
app.use("/api/contacts", ContactsRouter)
app.use("/users", UsersRouter)
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server Error"} = err;
  res.status(status).json({ message})
})

module.exports = app
