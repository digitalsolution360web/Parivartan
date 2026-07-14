import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Jeevan Parivartan Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #1e3a5f; padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0;">New Contact Enquiry</h2>
            <p style="color: #93c5fd; margin: 4px 0 0;">Jeevan Parivartan Nasha Mukti Kendra</p>
          </div>
          <div style="padding: 32px; background: #f8fafc;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569; width: 140px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #475569; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #0f172a;">${message || "No message provided."}</td>
              </tr>
            </table>
          </div>
          <div style="background: #1e3a5f; padding: 16px; text-align: center;">
            <p style="color: #93c5fd; margin: 0; font-size: 12px;">This email was sent from the contact form on the Jeevan Parivartan website.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
