import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#181a1f] text-white">
  <div className="container p-12 flex flex-col sm:flex-row justify-between items-center">
    <div className="socials flex flex-row mb-4 sm:mb-0 sm:mr-8">
      <Link href="https://github.com/codeguima">
        <Image src={GithubIcon} alt="Github Icon" width={30} height={30} />
      </Link>
      <Link href="https://br.linkedin.com/in/jhonny-guimaraes">
        <Image src={LinkedinIcon} alt="Linkedin Icon" width={30} height={30} />
      </Link>
    </div>
    <p className="block text-sm text-gray-500 text-center sm:text-left dark:text-gray-400">
      Desenvolvido por Jhonny Guimarães © 2024.
    </p>
  </div>
</footer>


  );
};

export default Footer;
