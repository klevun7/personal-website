import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between h-[100px] items-center px-6 lg:px-12 font-satoshi">
        
        {/* Logo / Brand */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <Link 
            href="/" 
            className="font-bold text-slate-500 transition-colors duration-300 hover:text-blue-600 text-lg"
          >
            kevincao
          </Link>
          <span className="text-sm text-slate-400">
         made with ❤️ by kevin 😗
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link
            href="https://www.linkedin.com/in/kevin-cao7/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="h-8 w-8 text-slate-400 transition-all duration-300 group-hover:text-[#0077b5] group-hover:-translate-y-1"
            />
          </Link>
          <Link
            href="https://github.com/klevun7"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              className="h-8 w-8 text-slate-400 transition-all duration-300 group-hover:text-black group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;