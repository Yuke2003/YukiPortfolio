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
      setFormData({
        fromEmail: "yukeshmeganathan2003@gmail.com",
        toEmail: "",
        sendSubject: "",
        sendText: "",
      });
    } else {
      setSentMessage(result.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 mx-8">
      <h1 className="mt-20 text-4xl font-medium bg-[#f8f062] p-4 rounded-2xl">
        Send an email for web services
      </h1>
      <form className="flex gap-20 bg-white shadow-xl p-12 mt-6 rounded-xl">
        <div className="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="Enter an Email"
            name="toEmail"
            required
            value={formData.toEmail}
            onChange={handleChange}
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="text"
            placeholder="Enter a Subject"
            name="sendSubject"
            required
            value={formData.sendSubject}
            onChange={handleChange}
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Enter your web services requirement..."
            name="sendText"
            required
            value={formData.sendText}
            onChange={handleChange}
            className="w-[670px] bg-gray-200 h-32 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <button
            className="bg-[#444] p-3 text-white font-thin w-80 rounded-lg"
            type="submit"
            onClick={handleSubmit}
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
