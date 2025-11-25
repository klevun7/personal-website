'use client'
import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    {name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();

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
      <div className="flex justify-center h-[80px] items-center text-slate-800 font-bold font-satoshi">
        <ul className="flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="cursor-pointer capitalize text-lg transition-colors duration-300 ease-in-out hover:text-blue-600 hover:underline decoration-blue-600/30 underline-offset-4"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;