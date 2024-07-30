"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Hamma ma'lumotlarni tolg'izing.", { position: "top-right" });
    }  else {
      // If the form is successfully submitted, show a success toast
      toast.success("Yuborildi!", {
        position: "top-right",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Ism"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Xabar"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="common_btn_2">
            Yuborish
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
