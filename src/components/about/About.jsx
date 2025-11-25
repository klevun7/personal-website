"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// --- Helper Component for the Buttons ---
const InteractiveButton = ({ href, text, isPrimary }) => {
  const [hoverColor, setHoverColor] = useState(null);

  const handleMouseEnter = () => {
    // Generate random Hue between 190 (Cyan) and 250 (Indigo)
    const randomHue = Math.floor(Math.random() * (250 - 190) + 190);
    // Construct HSL string: Saturation 90%, Lightness 60%
    setHoverColor(`hsl(${randomHue}, 90%, 60%)`);
  };

  const handleMouseLeave = () => {
    setHoverColor(null);
  };

  // Dynamic Styles based on hover state
  const style = isPrimary
    ? {
        backgroundColor: hoverColor || "#0f172a", // Slate-900 default
        color: "#ffffff",
        borderColor: hoverColor || "#0f172a",
      }
    : {
        backgroundColor: "transparent",
        color: hoverColor || "#334155", // Slate-700 default
        borderColor: hoverColor || "#e2e8f0", // Slate-200 default
      };

  return (
    <a
      href={href}
      target={isPrimary ? "_blank" : "_self"} // Resume opens new tab, Email doesn't
      rel={isPrimary ? "noopener noreferrer" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={`
        px-8 py-3 rounded-md font-bold text-sm tracking-wide border-2
        active:scale-95 flex items-center justify-center font-satoshi
      `}
    >
      {text}
    </a>
  );
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-12 max-w-6xl mx-auto">
        
        {/* Minimalist Header */}
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-bold font-satoshi text-slate-900 border-l-4 border-blue-600 pl-4 tracking-tight ">
            a little bit about me 😃
          </h2>
          <div className="h-px flex-1 bg-slate-200 mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start">
          
          {/* --- Image: Clean, Greyscale-to-Color interaction --- */}
          <div className="group relative shrink-0 w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="/kevin.jpg"
              fill
              className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 "
              alt="Kevin Cao"
              priority
            />
            {/* Subtle inner border for crispness */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
          </div>

          {/* --- Text Content --- */}
          <div className="flex flex-col justify-center gap-8 flex-1">
            <div className="space-y-6 text-lg text-slate-600 font-satoshi leading-relaxed font-light">
              <p>
                I&apos;m a recent <strong>Computer Science and Business</strong> graduate 
                from <span className="text-slate-900 font-medium">UC Riverside</span>.
              </p>
              <p>
                My passion lies in building scalable web applications. I bridge the gap between 
                clean code and business value, currently focusing on 
                <span className="text-slate-900 font-medium decoration-blue-200 underline underline-offset-4 decoration-2"> Distributed Systems</span> and 
                <span className="text-slate-900 font-medium decoration-cyan-200 underline underline-offset-4 decoration-2"> Cloud Architecture</span>.
              </p>
              <p>
                When I&apos;m not debugging Go routines, I&apos;m usually experimenting in the kitchen 
                or hunting for the best hole-in-the-wall restaurants.
              </p>
            </div>

            {/* --- Buttons with Random Hover Effect --- */}
            <div className="flex flex-wrap gap-4 pt-2">
              <InteractiveButton 
                href="/resume.pdf" 
                text="View Resume" 
                isPrimary={true} 
              />
              <InteractiveButton 
                href="mailto:kevincao5558@gmail.com" 
                text="Contact Me" 
                isPrimary={false} 
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;