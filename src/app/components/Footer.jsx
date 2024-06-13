import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="container p-12 flex justify-between">
      <div className="socials flex flex-row">
          <Link href="https://github.com/jguimaraesdev">
            <Image src={GithubIcon} alt="Github Icon" width={30}height={30}/>
          </Link>
          <Link href="https://br.linkedin.com/in/jhonny-guimaraes">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={30}height={30} />
          </Link>
        </div>
        <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Desenvolvido por Jhonny Guimarães © 2024.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
