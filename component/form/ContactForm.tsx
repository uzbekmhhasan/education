"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from '@formspree/react';


const ContactForm = () => {
  const [state,submit] = useForm('mqazqpve');
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [familya, setFamilya] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Hamma ma'lumotlarni tolg'izing.", { position: "top-right" });
    }  else {
      // If the form is successfully submitted, show a success toast
      toast.success("Yuborildi!", {
        position: "top-right",
      });
      setName("");
      setText("");
      setFamilya("");
      setEmail("");
      setMessage("");
    }
  };

 // function ContactForm() {
  //  const [state, handleSubmit] = useForm("mqazqpve");
  //  if (state.succeeded) {
  //      return <p>Thanks for joining!</p>;
  //  }

  return (
    <form onSubmit={submit} >
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
            type="text"
            placeholder="Familya"
            value={familya}
            onChange={(e) => setFamilya(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Nomer"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
