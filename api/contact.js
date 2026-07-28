import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      subject,
      budget,
      timeline,
      message,
      website,
    } = req.body;

    // Honeypot
    if (website) {
      return res.status(400).json({
        success: false,
        message: "Spam detected.",
      });
    }
    if (!name || !email || !subject || !budget || !timeline || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"FreshMind Web Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Website Inquiry - ${subject}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px">

        <h2>New Website Inquiry</h2>

        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company || "Not provided"}</td>
          </tr>

          <tr>
          <td><strong>Subject</strong></td>
            <td>${subject}</td>
          </tr>

          <tr>
            <td><strong>Budget</strong></td>
            <td>${budget}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "Not provided"}</td>
          </tr>

          <tr>
            <td><strong>Timeline</strong></td>
            <td>${timeline}</td>
          </tr>
        </table>

        <h3 style="margin-top:30px;">Project Details</h3>

        <p style="line-height:1.8;">
          ${message.replace(/\n/g, "<br>")}
        </p>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}
