import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "mail.zunim.com.ng",
  port: 465,
  secure: true,
  auth: {
    user: "support@zunim.com.ng",
    pass: "Zunimsupport@14",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const POST = async (req) => {
  try {
    const { name, email, subject, message } = await req.json(); // Parse JSON body

    await transporter.sendMail({
      from: email,
      to: "support@zunim.com.ng",
      subject: subject || "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return NextResponse.json({
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send contact form" },
      { status: 500 }
    );
  }
};
