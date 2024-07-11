// utils/sendEmail.js
"use server";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendEmail = async (req, res, next) => {
  try {
    const { fromEmail, toEmail, sendSubject, sendText, sendHtml } = req.body;
   
    const msg = {
      to: toEmail,
      from: fromEmail, 
      subject: sendSubject,
      text: sendText,
      html: sendHtml,
    };
    await sgMail.send(msg);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);

    if (error.response) {
      console.error("SendGrid response:", error.response.body);
    }
  }
  next();
};
