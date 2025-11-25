"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
  ];

  // Modified scroll handler to also close the mobile menu
  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false); // Close menu on click

    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const navbarHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between h-[80px] items-center font-satoshi">
        
        {/* 1. Brand / Logo (Optional but recommended for structure) */}
        <div 
           className="font-bold text-xl cursor-pointer text-slate-900"
           onClick={(e) => handleScroll(e, "#home")}
        >
           kevin.
        </div>

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden lg:flex flex-row gap-8 items-center font-bold text-slate-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className=" font-satoshi cursor-pointer capitalize text-lg transition-colors duration-300 ease-in-out hover:text-blue-600 hover:underline decoration-blue-600/30 underline-offset-4"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 3. Mobile Hamburger Button (Visible only on Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-slate-800 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon 
            icon={isOpen ? faXmark : faBars} 
            className="h-6 w-6 transition-transform duration-300" 
          />
        </button>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-slate-50 border-b border-slate-200"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-bold font-satoshi text-slate-800">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="cursor-pointer capitalize text-xl font-satoshitransition-colors duration-300 hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;