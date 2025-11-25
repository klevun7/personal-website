"use client";
import { useState } from "react";
import Image from "next/image";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("");

  const skillIcons = [
    { name: "Go", src: "/icons/go.svg" },
    { name: "C++", src: "/icons/cpp.svg" },
    { name: "Python", src: "/icons/python.svg" },
    { name: "JavaScript", src: "/icons/javascript.svg" },
    { name: "React", src: "/icons/react.svg" },
    { name: "TypeScript", src: "/icons/typescript.svg" },
    { name: "Next.js", src: "/icons/nextjs.svg" },
    { name: "Node.js", src: "/icons/nodejs.svg" },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "Redis", src: "/icons/redis.svg" },
    { name: "MySQL", src: "/icons/mysql.svg" },
    { name: "PostgreSQL", src: "/icons/postgres.svg" },
    { name: "Firebase", src: "/icons/firebase.svg" },
    { name: "AWS", src: "/icons/aws.svg" },
    { name: "Docker", src: "/icons/docker.svg" },
    { name: "Tailwind CSS", src: "/icons/tailwindcss.svg" },
  ];

  const handleMouseEnter = (index) => {
    const randomHue = Math.floor(Math.random() * (240 - 180) + 180);
    const filter = `brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(3000%) hue-rotate(${randomHue}deg) brightness(100%) contrast(100%)`;
    
    setActiveFilter(filter);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setActiveFilter("");
  };

  return (
    <div id="skills" className="flex flex-col gap-12 lg:gap-24">
      <h2 className="text-3xl  font-bold font-satoshi border-l-4 border-blue-600 pl-4 text-slate-900">
        Skills
      </h2>

      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-8 lg:gap-12 justify-items-center items-center">
        {skillIcons.map((skill, index) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center gap-2 relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative h-[50px] w-[50px] lg:h-[60px] lg:w-[60px] transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110">
              <Image
                src={skill.src}
                fill
                alt={skill.name}
                className="object-contain"
                style={{
                  transition: "filter 0.3s ease-in-out",
                  filter: hoveredIndex === index ? activeFilter : "none",
                }}
              />
            </div>

            <span className="opacity-0 group-hover:opacity-100 font-satoshi transition-opacity duration-300 text-xs font-bold text-blue-600 absolute -bottom-6 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;