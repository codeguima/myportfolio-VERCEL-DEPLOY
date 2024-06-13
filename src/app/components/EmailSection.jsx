"use client";
import React, { useState } from "react";

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
		 <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-18 gap-4 flex-col min-h-screen">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
  <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

  <section className="flex flex-col items-center justify-center">
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500 ">
          Contato
        </span>
      </h2>
      <p className="text-[#ADB7BE] lg:text-lg">
        Atualmente estamos em busca de novas oportunidades, 
        nossa caixa de entrada está sempre aberta. Se você tiver 
        alguma dúvida ou apenas quiser dizer oi, farei o possível 
        para entrar em contato com você!
      </p>
      <br/>
    </div>
  </section>

  <section className="flex items-center justify-center">
    <div className="w-96"> {/* Definindo a largura máxima do formulário */}
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">
          Email enviado com Sucesso!!
        </p>
      ) : (
        <form className="flex flex-col" onSubmit={handleSubmit}>
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
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              style={{ width: "100%" }} 
              placeholder="Escreva sua mensagem"
            />
          </div>
          <button 
            type="submit" 
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Enviar Mensagem
            </span>
          </button>
        </form>
      )}
    </div>
  </section>
  </div>
</section>
  );
};

export default EmailSection;
