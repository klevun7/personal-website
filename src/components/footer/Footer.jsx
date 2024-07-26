import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <nav>
    <div className="flex justify-between h-[100px] items-center text-slate-500 font-bold hover:text-black">
      <Link href="/">kevincao</Link>
      <div className="flex gap-2">
        <Link
          href={"https://www.linkedin.com/in/kevin-cao7/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-blue-500 hover:text-blue-700"
          />
        </Link>
        <Link
          href={"https://github.com/klevun7"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-slate-800 hover:text-black"
          />
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Footer;
