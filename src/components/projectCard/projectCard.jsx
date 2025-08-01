"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className="w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: isHovered ? "0.2" : "1" }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-xl font-extrabold text-white font-satoshi sm:text-md md:text-lg">
            {isHovered ? title : null}
          </h3>

          <div
            className={`transition-all duration-300 ${isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
              }`}
          >
            <p className="text-white text-xs font-satoshi sm:text-sm md:text-md">
              {description}
            </p>
            <div className="flex justify-end">
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-white hover:text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;