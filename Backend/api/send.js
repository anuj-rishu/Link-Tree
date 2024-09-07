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
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>We have received your message:</p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
            "${message}"
          </blockquote>
          <p>We will get back to you as soon as possible.</p>
          <p>Best regards,<br/>Anuj Rishu</p>
        </div>
      `,
    };

        const adminMailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'New Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
            ${message}
          </blockquote>
        </div>
      `,
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
