import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { name: "home", href: "#home" },
    { name: "about", href: "#about" },
    { name: "skills", href: "#skills" },
    { name: "projects", href: "#projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="flex justify-center h-[80px] items-center text-slate-800 font-bold font-satoshi">
        <ul className="flex flex-row gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <li
                className="cursor-pointer text-lg transition-colors duration-300 ease-in-out hover:text-blue-600 hover:underline decoration-blue-600/30 underline-offset-4"
              >
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;