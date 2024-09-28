"use client"
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Projeto realizado com React, Next e Tailwind",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 2,
    title: "Rede Social Portfolios Website",
    description: "Projeto de site de cadastro de portfolios de programadores, realizado com React, Next e Tailwind navegação por token.  ",
    image: "/images/projects/redesocial.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jhonnycodedev/next-typescript-zustand-response",
    previewUrl: "https://codedevsocials.netlify.app/",
  },
  {
    id: 3,
    title: "E-commerce Aplicação",
    description: "Projeto em Construção para uma loja de atacado!",
    image: "/images/projects/8.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.daeatacado.com.br/",
  },
  
  {
    id: 4,
    title: "Now Barber Application",
    description: "Projeto de um localizador de Barbearias para clientes, realizado com Kotlin, Android Studio",
    image: "/images/projects/logo3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/jhonnycodedev/AppBarber",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Full Stack Totem Digital",
    description: "Operações de estacionamento, CRUD realizado com .Net Framework + SQLite no back, Angular-CLI + Bootstrap no front ",
    image: "/images/projects/estacionamento.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jhonnycodedev/web-api-estacionamento",
    previewUrl: "https://jhonnycodedev.github.io/angular-cli-bootstrap-typescript/",
  },
  {
    id: 6,
    title: "Front Blog Outlet",
    description: "Projeto bem básico feito em sala de aula apenas para testar as ferramentas de Web, PHP, CSS, HTML5.",
    image: "/images/projects/outlet.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jhonnycodedev/oculos-outlet-basic-site",
    previewUrl: "https://jhonnycodedev.github.io/oculos-outlet-basic-site/",
  },
  {
    id: 7,
    title: "Alimentador de Pet IoT",
    description: "Projeto bem básico feito em sala de aula com material reciclável e Módulo ESP32 + MycroPython",
    image: "/images/projects/9.jpg",
    tag: ["All", "IoT"],
    gitUrl: "https://github.com/jhonnycodedev/pet-feeder-iot-mycropython",
    previewUrl: "/images/projects/9.jpg",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meu Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
         <ProjectTag
          onClick={handleTagChange}
          name="IoT"
          isSelected={tag === "IoT"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
