const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Message = require("../models/Message");

// Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// POST /api/contact — save message and send email notification
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save to MongoDB
    const newMessage = await Message.create({ name, email, message });

    // Send email notification — non-blocking, won't fail the request
    transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "lijithmk357@gmail.com",
      subject: `📬 New Message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0F; color: #e2e8f0; padding: 32px; border-radius: 16px; border: 1px solid #6C63FF44;">
          <h2 style="color: #6C63FF; margin-bottom: 24px;">📬 New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; width: 80px;">Name</td>
              <td style="padding: 10px 0; color: #fff; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #6C63FF;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #e2e8f0; line-height: 1.6;">${message}</td>
            </tr>
          </table>
          <hr style="border-color: #1E1E2E; margin: 24px 0;" />
          <p style="color: #475569; font-size: 12px;">Sent from your portfolio contact form • ${new Date().toLocaleString()}</p>
          <a href="mailto:${email}" style="display: inline-block; margin-top: 12px; padding: 10px 24px; background: #6C63FF; color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
        </div>
      `,
    }).catch((err) => console.error("Email send failed (non-blocking):", err.message));

    res.status(201).json({ success: true, data: newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// GET /api/contact — fetch all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
