import { sendEmail } from "@/app/utils/emailController";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fromEmail, toEmail, sendSubject, sendText } = req.body;

    const result = await sendEmail({
      fromEmail,
      toEmail,
      sendSubject,
      sendText,
    });

    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(500).json({ message: result.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
