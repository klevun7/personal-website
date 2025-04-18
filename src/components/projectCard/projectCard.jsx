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
      className=" m-8 relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition ease-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ maxWidth: "800px", height: "400px" }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={800}
          objectFit="fill"
          className="transition-opacity duration-300"
          style={{ opacity: isHovered ? "0.2" : "1" }}
        />

        <div className="absolute inset-0 flex flex-col justify-between p-8 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-3xl font-extrabold text-white font-satoshi">
            {isHovered ? title : null }
          </h3>

          <div
            className={`transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-white text-md font-satoshi">{description}</p>
            <div className="flex justify-end ">
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2-"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-white  hover:text-white"
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
