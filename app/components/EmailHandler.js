"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function EmailHandler() {
  const form = useRef();
  const [sentMessage, setSentMessage] = useState();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uzrwk21", "template_c91rxsn", form.current, {
        publicKey: "oosRe9Lw094wJzp3C",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
          setSentMessage("email Sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="flex flex-col items-center justify-center p-6 mx-8">
      <h1 className="mt-20 text-4xl font-medium bg-[#f8f062] p-4 rounded-2xl">
        Send an email for web services
      </h1>
      <form
        className="flex gap-20 bg-white shadow-xl p-12 mt-6 rounded-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Enter an name"
            name="user_name"
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Enter an Email"
            name="user_email"
            className="w-[670px] bg-gray-200 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <textarea
            placeholder="Enter your web services requirement..."
            name="message"
            className="w-[670px] bg-gray-200 h-32 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <input
            type="submit"
            value="@Send an Email"
            className="bg-[#444] p-3 text-white font-thin w-80 rounded-lg cursor-pointer"
            
          />
          <h3 className="mt-3 text-center">{sentMessage}</h3>
        </div>
      </form>
    </div>
  );
}

export default EmailHandler;
