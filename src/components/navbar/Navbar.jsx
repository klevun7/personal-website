import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center h-[100px] items-center text-black font-bold font-satoshi">
     
         <ul className="flex flex-row gap-5 items-center">
          <Link href = "#home">
          <div className=" hover:underline ">home</div>
          </Link>
          <Link href = "#about">
          <div className=" hover:underline">about</div>
          </Link>
          <Link href = "#skills">
          <div className=" hover:underline">skills</div>
          </Link>
          <Link href = "#projects">
          <div className=" hover:underline">projects</div>
          </Link>
         </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;