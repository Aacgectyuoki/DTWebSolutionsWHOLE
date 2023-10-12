const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
const emailConfig = {
    service: 'Gmail', // Use your email service provider
    auth: {
      user: 'shahbazkhaniq@gmail.com',
      pass: 'bqguitpvcwdvebfx',
    },
  };
  
  const transporter = nodemailer.createTransport(emailConfig);
  
app.use("/api/submit-service", (req,res)=>{
	
    try {
        const formData = req.body;


        const mailOptions = {
          from: 'maxd4637@gmail.com',
          to: 'maxd4637@gmail.com', 
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
    } catch (error) {
        onsole.log(`Getting error while sending email`, error);
    }


});

app.get("*", (req, res) => {
  res.send("Not Found");
});

app.listen(4000, () => {
  console.log(
    `Listening on port  http://localhost:4000`
  );
});
