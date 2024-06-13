"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import foto  from "../../../public/images/linguagem.png";
const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>Python</li>
        <li>Micro Python</li>
        <li>Angular Cli</li>
        <li>Net.Framework</li>
        <li>Bootstrap</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bacharelado Sistemas de Informação</li>
        <li>Universidade Positivo 2022-2025</li>
        <br></br>
        <li>Análise e Desenvolvimento de Sistemas</li>
        <li>Pontificia Universidade Católica 2021-2022</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Sem certificações</li>
        {/*
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

        <Image src={foto} width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">

          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mim</h2>

          <p className="text-base lg:text-lg">
          Discente de Sistemas de Informação, atualmente no terceiro ano do curso. 
          Minha jornada acadêmica tem sido enriquecida com experiências em linguagens programação 
          juntamente com conceitos de S.O.L.I.D e Design Patterns. Minha habilidade em aprender com facilidade 
          e minha resiliência diante de desafios têm fortalecido meu progresso no meus estudos, 
          estou sempre em busca de expandir meus conhecimentos e habilidades..
          </p>
          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Graduações{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificações{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
