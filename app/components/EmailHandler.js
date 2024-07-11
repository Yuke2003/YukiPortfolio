"use client";

import { sendEmail } from "../utils/emailController";
import { useState } from "react";
function EmailHandler() {
  const [formData, setFormData] = useState({
    fromEmail: "yukeshmeganathan2003@gmail.com",
    toEmail: "",
    sendSubject: "",
    sendText: "",
  });
  const [sentmessage, setSentMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     const sendHtml = `<p>${formData.sendText}</p>`;
    const emailData = { ...formData, sendHtml };
    console.log("function called");
    try {
      const response = await fetch("http://localhost:8000/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
      setSentMessage("Email sent successfully");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center p-6 mx-8">
      <h1 className="mt-20 text-4xl font-medium bg-[#f8f062] p-4 rounded-2xl">
        Send an email for web services
      </h1>
      <form
        className="flex gap-20 bg-white shadow-xl p-12 mt-6 rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Enter an Email"
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Enter an Subject"
            value={formData.sendSubject}
            onChange={(e) =>
              setFormData({ ...formData, sendSubject: e.target.value })
            }
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Enter your web services requirement..."
            value={formData.sendText}
            onChange={(e) =>
              setFormData({ ...formData, sendText: e.target.value })
            }
            className="w-[670px] bg-gray-200 h-32 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <button
            className="bg-[#444] p-3 text-white font-thin w-80 rounded-lg"
            type="button"
          >
            @Send an Email
          </button>
          <h3 className="mt-3 text-center">{sentmessage}</h3>
        </div>
      </form>
    </div>
  );
}

export default EmailHandler;
