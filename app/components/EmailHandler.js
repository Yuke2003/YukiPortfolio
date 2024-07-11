"use client";

import { useState } from "react";
import { sendEmail } from "@/app/utils/emailController"; // Update the path accordingly

function EmailHandler() {
  const [formData, setFormData] = useState({
    fromEmail: "yukeshmeganathan2003@gmail.com",
    toEmail: "",
    sendSubject: "",
    sendText: "",
  });
  const [sentMessage, setSentMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendEmail(formData);
    if (result) {
      setSentMessage(result.message);
    } else {
      setSentMessage(result.message);
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
            type="email"
            placeholder="To Email"
            value={formData.toEmail}
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) =>
              setFormData({ ...formData, toEmail: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={formData.sendSubject}
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) =>
              setFormData({ ...formData, sendSubject: e.target.value })
            }
            required
          />
          <textarea
            placeholder="Text"
            value={formData.sendText}
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            onChange={(e) =>
              setFormData({ ...formData, sendText: e.target.value })
            }
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#444] p-3 text-white font-thin w-80 rounded-lg cursor-pointer"
          >
            @Send an Email
          </button>
          <h3 className="mt-3 text-center">{sentMessage}</h3>
        </div>
      </form>
    </div>
  );
}

export default EmailHandler;
