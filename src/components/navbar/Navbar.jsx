import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between h-[100px] items-center text-black font-bold font-satoshi">
        <Link href="/">kevincao</Link>
         <ul className="flex flex-row gap-5 items">
          <Link href = "#id1">
          <div className=" hover:underline">home</div>
          </Link>
          <Link href = "#id2">
          <div className=" hover:underline">about</div>
          </Link>
          <Link href = "#id3">
          <div className=" hover:underline">skills</div>
          </Link>
          <Link href = "#id4">
          <div className=" hover:underline">projects</div>
          </Link>
         </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
