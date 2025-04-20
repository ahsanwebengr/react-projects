const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL;

router.post('/', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  try {
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: `Real Chain LLC`,
          email: SENDER_EMAIL, // MUST be verified sender email
        },
        to: [{ email: email }],
        subject: `Contact Form: ${subject}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      },
      {
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data?.message || 'Failed to send message',
    });
  }
});

module.exports = router;
