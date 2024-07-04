const nodemailer = require('nodemailer');
require('dotenv').config();

export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Preflight request
    return res.status(200).json({});
  }

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Anuj Rishu || Form Confirmation',
      text: `Thank you for reaching out, ${name}. We have received your message: "${message}"`,
    };

    const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(userMailOptions);
      await transporter.sendMail(adminMailOptions);
      res.status(200).json({ message: 'Message Sent Successfully' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
