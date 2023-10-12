const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
// const port = process.env.PORT || 4200;
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(cors());

// Replace with your email credentials and settings
const emailConfig = {
  service: 'Gmail',
  auth: {
    user: 'maxd4637@gmail.com',
    pass: 'G432abc1x!',
  },
};

const transporter = nodemailer.createTransport(emailConfig);

app.post('/api/submit-service', (req, res) => {
    const formData = req.body;
  
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'maxd4637@gmail.com', // Recipient's email address
      subject: 'New Service Booking',
      text: `
        Service Type: ${formData.serviceType}
        Date: ${formData.date}
        Time: ${formData.time}
      `,
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
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

// app.post('/api/submit-service', (req, res) => {
//   const formData = req.body;

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'maxd4637@gmail.com', // Recipient's email address
//     subject: 'New Service Booking',
//     text: `
//       Service Name: ${formData.serviceName}
//       Service Description: ${formData.serviceDescription}
//       Service Price: ${formData.servicePrice}
//     `,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Failed to send email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


