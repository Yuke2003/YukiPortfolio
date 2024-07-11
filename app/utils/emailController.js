
"use server";

import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async ({
  fromEmail,
  toEmail,
  sendSubject,
  sendText,
}) => {
  try {
    const sendHtml = `<p>${sendText}</p>`;
    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: sendSubject,
      text: sendText,
      html: sendHtml,
    };
    await sgMail.send(msg);
    console.log(msg);
    console.log("Email sent successfully!");
    return { status: "success", message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("SendGrid response:", error.response.body);
      return { status: "error", message: error.response.body };
    } else {
      return { status: "error", message: "Error sending email" };
    }
  }
};
