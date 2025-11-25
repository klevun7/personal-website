"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Headstarter",
    role: "Software Engineering Fellow",
    period: "June 2024 - Sept 2024",
    logo: "/icons/headstarter.svg", 
    description: [
      "Engineered CI/CD pipelines using GitHub Actions to automate testing and deployment processes, reducing deployment times by 80% and automating build and testing workflows.",
      "Integrated Stripe API for payment processing, implementing subscription billing, webhook handling, and secure tokenization across multiple projects.",
      "Conducted 30+ code reviews with peers, providing constructive feedback to improve code quality and catch bugs before deployment.",
    ],
    skills: ["NextJS", "CI/CD", "FireBase", "Stripe API", "GitHub Actions", "TypeScript", "OpenAI API"],
  },
  {
    company: "University of California, Riverside",
    role: "Frontend Software Engineer",
    period: "December 2023 - April 2024",
    logo: "/icons/acm.webp", 
    description: [
      "Engineered 10+ custom React components including interactive carousels, event calendars, and UI elements, implementing routing logic and state management with React Router and Redux.",
      "Improved page load times by 30% by implementing Next.js image caching and optimization, validated through Lighthouse performance audits.",
      "Integrated Google Calendar API for automated event synchronization, eliminating manual scheduling and reducing booking conflicts.",
    ],
    skills: ["JavaScript", "NextJS", "TailwindCSS", "Google Calendar API", "React Router", "Redux"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      {/* CHANGE: Removed 'max-w-4xl mx-auto'. 
        Used 'w-full' to align with the parent container (page.js max-w-7xl) 
      */}
      <div className="flex flex-col gap-12 w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 items-center"
        >
          <h2 className="text-3xl font-bold font-satoshi border-l-4 border-blue-600 pl-4 text-slate-900">
            Experience
          </h2>
          <div className="h-px flex-1 bg-slate-200 mt-1"></div>
        </motion.div>

        {/* Added 'max-w-5xl' here so the cards don't stretch TOO wide 
           (reading long lines of text is hard), but they stay left-aligned.
        */}
        <div className="flex flex-col gap-8 max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-10 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-colors duration-300"
            >
              
              {/* Logo Section */}
              <div className="shrink-0">
                <div className="w-16 h-16 relative bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden grid place-items-center group-hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 gap-3">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-satoshi">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-slate-400 font-medium font-satoshi bg-slate-100 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="list-disc list-outside ml-4 space-y-1 mt-1">
                  {exp.description.map((point, i) => (
                    <li 
                      key={i} 
                      className="text-slate-600 leading-relaxed text-sm lg:text-base font-light marker:text-slate-300 pl-1"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-bold tracking-wider uppercase text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;