import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    type: 'login',
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

transporter.verify((err, success) => {
  if (err) console.error(err);
  if (success) console.log('Server is ready to send emails');
});

app.post('/api/send/email', (req, res) => {
  const form = new multiparty.Form();
  const data = {};
  form.parse(req, (err, fields) => {
    if (err) console.error(`There was an error: ${err}`);
    console.log(fields);
    Object.keys(fields).forEach((property) => {
      data[property] = fields[property].toString();
    });

    const email = {
      from: data.name,
      to: process.env.EMAIL,
      subject: data.email,
      text: `${data.name} <${data.email}> ${data.message}`,
    };

    transporter.sendMail(email, (err2, data2) => {
      console.log(email);
      if (err2) {
        console.log(err2);
        res.status(500).send(`Email could not be sent: ${err2}`);
      } else if (data2)
        res.status(200).send('Email successfully sent to recipient');
    });
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
