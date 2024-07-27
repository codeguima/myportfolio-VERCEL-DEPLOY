"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import React from "react";

function EmailSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Inicialize o EmailJS com a chave pública
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200 || response.text === "OK") {
        setEmailSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error("Falha ao enviar mensagem:", response.text);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-tertiary py-18 sm:py-16 xl:px-16">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
        <div className="flex flex-col mt-12 md:mt-0 text-left h-full px-4 sm:px-8">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
              Contato
            </span>
          </h2>
          <p className="text-[#ADB7BE] lg:text-lg">
            Nossa caixa de entrada está sempre aberta. Se você tiver 
            alguma dúvida ou apenas quiser dizer oi, farei o possível 
            para entrar em contato com você!
          </p>
          <br />
        </div>
        
        <div className="flex items-center justify-center px-4 sm:px-8">
          <div className="w-full max-w-lg">
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email enviado com sucesso!
              </p>
            ) : (
              <form className="flex flex-col p-6 rounded-lg shadow-md w-full" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                    Seu email
                  </label>
                  <input 
                    name="email"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="endereço@provedor.com"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="name" className="text-white block text-sm mb-2 font-medium">
                    Seu nome
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Escreva seu Nome"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Escreva sua mensagem"
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Enviar Mensagem
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailSection;
