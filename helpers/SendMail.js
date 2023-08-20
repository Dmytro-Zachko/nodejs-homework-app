const nodemailer = require('nodemailer')
require("dotenv").config()

const { META_PASSWORD } = process.env;
const transport = nodemailer.createTransport({
  host: "smtp.meta.ua",
    port: 465,
  secure:true,
  auth: {
    user: "zaichkodmytro2004@meta.ua",
    pass: META_PASSWORD,
  },
   tls: {
        secureProtocol: "TLSv1_method"
    }
});

const sendEmail = async (data) => {
  const email = { ...data, from: "zaichkodmytro2004@meta.ua" };
  await transport.sendMail(email);
  return true;
};

    module.exports = sendEmail