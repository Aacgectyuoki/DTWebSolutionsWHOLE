const nodemailer = require('nodemailer');
const fs = require("fs");

const emailConfig = {
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
};

const transporter = nodemailer.createTransport(emailConfig);

const emailTemplate = fs.readFileSync("./functions/emailTemplate.html", "utf-8");

exports.handler = async (event, context) => {
  try {
    const formData = JSON.parse(event.body);

    const emailContent = emailTemplate
      .replace("{{ serviceType }}", formData.serviceType)
      .replace("{{ date }}", formData.date)
      .replace("{{ time }}", formData.time);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
    //   from: 'maxd4637@gmail.com',
    //   to: 'maxd4637@gmail.com',
      subject: 'New Service Booking',
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};