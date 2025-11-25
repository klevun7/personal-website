"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  projectUrl, 
  repoUrl, 
  tags = [] 
}) => {
  return (
    <div className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 ease-in-out">
      
      {/* --- 1. Image Area (Top) --- */}
      {/* Defined height, image zooms slightly on hover */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* --- 2. Content Area (Bottom) --- */}
      <div className="flex flex-col flex-1 p-6">
        
        {/* Tags - Minimalist pills */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 10).map((tag, index) => (
              <span 
                key={index} 
                className="px-2.5 py-0.5 text-[11px] font-bold tracking-wide font-satoshi uppercase text-slate-500 bg-slate-100 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold font-satoshi text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* --- 3. Footer / Links (Sticks to bottom) --- */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          
          {/* Live Link with Arrow Animation */}
          {projectUrl ? (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-satoshi gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              View Project
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" 
              />
            </Link>
          ) : (
            <span className="text-xs text-slate-400 font-medium">Coming Soon</span>
          )}

          {/* Github Icon */}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;