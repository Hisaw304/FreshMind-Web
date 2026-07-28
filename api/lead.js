import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  const { name, email, phone, company, budget, project } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"FreshMind Website" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      subject: `🚀 New FreshMind Quote Request`,

      html: `
        <h2>New Lead</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Company:</strong> ${company || "N/A"}</p>

        <p><strong>Budget:</strong> ${budget}</p>

        <p><strong>Project:</strong></p>

        <p>${project}</p>
      `,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Failed to send email.",
    });
  }
}
