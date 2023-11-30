// const express = require("express");
// const cors = require("cors");
// const nodemailer = require('nodemailer');
// const fs = require("fs");
// const app = express();

// app.use(cors());
// app.use(express.json({ limit: "5mb" }));

// const emailConfig = {
//   service: 'Gmail', // Use your email service provider
//   auth: {
//     user: 'maxd4637@gmail.com',
//     pass: 'cngiepwjoiwirlku',
//   },
// };

// const transporter = nodemailer.createTransport(emailConfig);

// const emailTemplate = fs.readFileSync("./functions/emailTemplate.html", "utf-8");

// app.post("/api/submit-service", (req, res) => {
//   try {
//     const formData = req.body;

//     const emailContent = emailTemplate
//       .replace("{{ serviceType }}", formData.serviceType)
//       .replace("{{ date }}", formData.date)
//       .replace("{{ time }}", formData.time);

//     const mailOptions = {
//       from: 'maxd4637@gmail.com',
//       to: 'maxd4637@gmail.com',
//       subject: 'New Service Booking',
//       html: emailContent,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ message: 'Failed to send email' });
//       } else {
//         console.log('Email sent:', info.response);
//         res.status(200).json({ message: 'Email sent successfully' });
//       }
//     });
//   } catch (error) {
//     console.log('Error sending email:', error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// });

// app.get("*", (req, res) => {
//   res.send("Not Found");
// });

// app.listen(4000, () => {
//   console.log(`Listening on port http://localhost:4000`);
// });