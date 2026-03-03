import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: `${name || "Website Contact"} <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject || `New contact from ${name || email}`,
      text: `Name: ${name || "—"}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name || "—"}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending contact email:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
