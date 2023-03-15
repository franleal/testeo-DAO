require("dotenv").config()
const twilio = require('twilio')



var accountSid = process.env.TWILIO_ACCOUNT_SID
var authToken = process.env.TWILIO_AUTH_TOKEN

const client = new twilio(accountSid, authToken)

const from = process.env.TWILIO_PHONE_NUMBER
const to = process.env.MY_PHONE
const body = process.env.MESSAGE

const sms = () => {
    client.messages.create({ body, from, to }).then((message) => console.log(message.sid))
}


exports.sendSMS = () => sms()
