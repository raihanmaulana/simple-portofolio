import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, company, email, phoneNumber, message } =
      req.body;

    // Konfigurasi transporter untuk Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Atau layanan email lain
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: "your-email@example.com", // Ganti dengan alamat email Anda
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:

      Name: ${firstName} ${lastName}
      Company: ${company}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
