require('dotenv').config();

const express = require("express");
const cors = require("cors");
const nodemailer = require('nodemailer');
const fs = require("fs");
const serverless = require('serverless-http');
const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

const emailConfig = {
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const emailTemplate = fs.readFileSync("../functions/emailTemplate.html", "utf-8");

// Set the Content Security Policy header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; style-src 'self' https://cdnjs.cloudflare.com");
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.post("/.netlify/functions/submit-service", (req, res) => {
  try {
    const formData = req.body;

    const emailContent = emailTemplate
      .replace("{{ serviceType }}", formData.serviceType)
      .replace("{{ date }}", formData.date)
      .replace("{{ time }}", formData.time);

    const mailOptions = {
      from: 'maxd4637@gmail.com',
      to: 'maxd4637@gmail.com',
      subject: 'New Service Booking',
      html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully' });
      }
    });
  } catch (error) {
    console.log('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.get("*", (req, res) => {
  res.send("Not Found");
});

module.exports.handler = serverless(app);


// app.listen(9000, () => {
//   console.log(`Listening on port http://localhost:9000`);
// });
