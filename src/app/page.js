"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "nextjs-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// Components
import Chicken from "@/components/chicken/Chicken";
import ProjectCard from "@/components/projectCard/projectCard";
import Skills from "@/components/skills/Skills";
import "./globals.css";
import About from "@/components/about/About";
import { useLenis } from "@/hooks/useLenis";
import Experience from "@/components/experience/Experience";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export default function Home() {
  useLenis();

  return (
    <main id="home" className="min-h-screen bg-slate-50 selection:bg-blue-100 overflow-x-hidden">
      
      {/* Main Wrapper */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-0"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        
        {/* --- HERO SECTION --- */}
        <motion.section 
          variants={fadeInUp} 
          className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[85vh] gap-10 mt-8 lg:mt-0"
        >
          {/* Left Side: Text */}
          <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-6 z-10">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold font-satoshi text-slate-900 tracking-tight">
                hey i&rsquo;m <span className="animate-color-cycle px-2">kevin!</span>
              </h1>

              <div className="h-12 flex items-center">
                <span className="font-satoshi text-xl sm:text-2xl lg:text-3xl text-slate-600 font-medium">
                  <Typewriter
                    words={[
                      "aspiring fullstack developer",
                      "cloud computing enthusiast",
                      "trying to center a div",
                      "fried chicken lover ❤️",
                      "building with Go & AWS",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </div>
            </div>

            <div className="flex gap-6 mt-2">
              <Link
                href="https://www.linkedin.com/in/kevin-cao7/"
                target="_blank"
                className="group"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-10 w-10 text-slate-400 transition-all duration-300 group-hover:text-[#0077b5] group-hover:-translate-y-1"
                />
              </Link>
              <Link
                href="https://github.com/klevun7"
                target="_blank"
                className="group"
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  className="h-10 w-10 text-slate-400 transition-all duration-300 group-hover:text-black group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Right Side: Chicken 
            1. 'hidden' -> Hides it on Mobile/Tablet (display: none)
            2. 'lg:flex' -> Shows it ONLY on Large screens (1024px+)
          */}
          <div className="hidden lg:flex flex-1 w-full lg:w-1/2 h-[500px] xl:h-[600px] items-center justify-center relative">
            <Chicken />
          </div>
        </motion.section>

        {/* --- ABOUT SECTION --- */}
        <motion.div variants={fadeInUp}>
          <About />
        </motion.div>

        {/* --- SKILLS SECTION --- */}
        <motion.section 
          variants={fadeInUp} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-10"
        >
          <Skills />
        </motion.section>

        {/* --- EXPERIENCE SECTION --- */}
        <motion.div 
           variants={fadeInUp}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
        >
          <Experience />
        </motion.div>

        {/* --- PROJECTS SECTION --- */}
        <motion.section 
          id="projects" 
          className="py-20 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-bold font-satoshi text-slate-900 border-l-4 border-blue-600 pl-4">
                Projects 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <ProjectCard
                projectUrl={"https://github.com/klevun7/devlink"}
                tags={["Go", "Python", "AWS SES", "AWS EC2", "Docker"]}
                title={"DevLink"}
                imageUrl={"/sysdia.png"}
                description={"A platform for new-grads to find job opportunities instantly. Built with a high-performance Go backend and AWS integration."}
              />
              <ProjectCard
                projectUrl={"https://matchanotes.vercel.app/"}
                repoUrl={"https://github.com/klevun7/matchanotes"}
                title={"MatchaNotes"}
                tags={["Next.js", "TypeScript", "Redis", "PostgreSQL"]}
                imageUrl={"/matcha.png"}
                description={"A full-stack community platform for matcha enthusiasts featuring complex search algorithms and secure authentication."}
              />
              <ProjectCard
                projectUrl={"https://style-swiper.vercel.app/"}
                repoUrl={"https://github.com/klevun7/Style-Swiper"}
                title={"StyleSwiper"}
                tags={["React", "Firebase", "Jest"]}
                imageUrl={"/styleswiper.png"}
                description={"A fashion discovery app featuring a 'swipe-right' mechanic to personalize clothing recommendations."}
              />
              <ProjectCard
                projectUrl={"https://github.com/klevun7/sf_proposition_history"}
                title={"SF Proposition History"}
                tags={["Next.js", "MySQL", "D3.js", "i18n"]}
                imageUrl={"/sf3.png"}
                description={"Interactive data visualization dashboard for historic San Francisco ballot measures with multi-language support."}
              />
            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}