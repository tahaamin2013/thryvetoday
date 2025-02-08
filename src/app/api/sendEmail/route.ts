import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

      // You can change the email design using html and css.
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <header style="background-color: #f5f5f5; padding: 20px; text-align: center;">
        <h1 style="font-size: 24px; color: #333; margin: 0;">New Message From ${name}</h1>
      </header>
      <div style="padding: 20px;">
        <p style="font-size: 16px; color: #666;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px; color: #666;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px; color: #666;"><strong>Message:</strong> ${message}</p>
      </div>
      <footer style="background-color: #f5f5f5; padding: 10px; text-align: center;">
        <p style="font-size: 14px; color: #999; margin: 0;">&copy; ${new Date().getFullYear()} [company_name]. All rights reserved.</p>
      </footer>
    </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 }
    );
  }
}