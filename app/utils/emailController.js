// utils/sendEmail.js
"use server";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({ fromEmail, toEmail, sendSubject, sendText }) {
  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: sendSubject,
    text: sendText,
  };
  try {
    await sgMail.send(msg);
    console.log("Email sent successfully!");
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("SendGrid response:", error.response.body);
    }
    return { success: false, message: "Failed to send email" };
  }
}
