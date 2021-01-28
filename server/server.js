import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import multiparty from 'multiparty';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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
  console.log('Server is ready to send emails');
});

app.post('/api/send/email', (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, (err, fields) => {
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

    transporter.sendMail(email, (err, data) => {
      console.log(email);
      if (err) {
        console.log(err);
        res.status(500).send(`Email could not be sent: ${err}`);
      } else res.status(200).send('Email successfully sent to recipient');
    });
  });
});

app.listen(8080, () => console.log('server is up'));
