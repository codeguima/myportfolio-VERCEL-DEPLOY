"use client";
import React, { useState } from "react";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});
const EmailSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { email, name, message } = e.target;
  
    const data = {
      email: email.value,
      name: name.value,
      message: message.value,
    };
  
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log("Mensagem Enviada.");
        setEmailSubmitted(true); // Atualiza o estado emailSubmitted para true
      } else {
        console.error("Falha ao enviar mensagem:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };
  


  return (
   
    <section id="contact" className="min-h-screen bg-tertiary py-18 sm:py-16 xl:px-16">
  <div className="container mx-auto md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
    {/* Texto do lado esquerdo */}
    <div className="flex flex-col mt-12 md:mt-0 text-left h-full px-4 sm:px-8">
      <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
          Contato
        </span>
      </h2>
      <p className="text-[#ADB7BE] lg:text-lg">
        Atualmente estamos em busca de novas oportunidades, 
        nossa caixa de entrada está sempre aberta. Se você tiver 
        alguma dúvida ou apenas quiser dizer oi, farei o possível 
        para entrar em contato com você!
      </p>
      <br />
    </div>
    
    {/* Formulário do lado direito */}
    <div className="flex items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-lg">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com Sucesso!!
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
};

export default EmailSection;
