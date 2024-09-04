"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import foto from "../../../public/images/IMG-2.jpg";
const HeroSection = () => {

  //Configurações para exportar curriculm
  const handleDownloadClick = () => {
    // Substitua 'caminho/do/arquivo.pdf' pelo caminho do seu arquivo a ser baixado
    const filePath = '/';

    window.open(filePath, '_blank');
  };


  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
              Hello!
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                //"Hello",
                //1000,
                "Eu sou",
                1000,
                "Jhonny G.",
                1000,
                "Desenvolvedor",
                1000,
                "Full Stack | IoT",
                1000,
                "I am",
                1000,
                "Jhonny G.",
                1000,
                "Developer",
                1000,
                "Full Stack | IoT",
                1000,
              ]}
              wrapper="span"
              speed={0.10}
              //style={{ fontSize:'2em', display: 'inline-block'}}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Seja bem-vindo ao meu portfólio! Estou feliz em compartilhar 
            um pouco da minha jornada profissional e alguns dos projetos que desenvolvi ou estão em andamento na área de tecnologia. 
            Mal posso esperar para explorar possíveis colaborações juntos!
          </p>
          <div>
            <Link
              href="/#contact"
              //Aqui configura-se a cor do botão para contate-me
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4  bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-primary-500 text-black"
            >
              Contate-Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadClick} //button evento para download pdf
            >{/*sequiser borda no botão text-white border border-white */}
              <span className="block bg-tertiary hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 10, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="flex items-center justify-center">
        <div className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-2 w-[250px] h-[250px] lg:w-[260px] lg:h-[360px] flex items-center justify-center overflow-hidden">
          <div className="rounded-full bg-[#121212] w-full h-full flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full">
            <Image
                src={foto}
                alt="hero image"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
            />
            </div>
          </div>
        </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
