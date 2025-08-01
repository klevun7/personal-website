import Image from "next/image";
import Chicken from "@/components/chicken/Chicken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faLinkedin,
  faJs,
  faAws,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "nextjs-simple-typewriter";
import ProjectCard from "@/components/projectCard/projectCard";
import "./globals.css";
import Link from "next/link";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div id="home" className="flex flex-col lg:flex-row">
      <div className="flex flex-1 flex-col gap-6 sm:gap-2 lg:gap-12 px-4 lg:px-0">
        {/* Hero Section */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-28  lg:min-h-[80vh] sm:min-h-[80vh] mt-8 sm:mt-16 lg:mt-36">
          <div className="flex sm:items-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-satoshi">
              hey i&rsquo;m kevin!
            </h1>
          </div>

          <div className="flex">
            <span className="font-satoshi text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left">
              <Typewriter
                words={[
                  "aspiring fullstack software developer",
                  "learning more about cloud computing",
                  "trying to center a div",
                  "fried chicken lover",
                  "currently learning Go",
                ]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <div className="flex gap-6 lg:gap-10 justify-center lg:justify-start">
            <Link
              href={"https://www.linkedin.com/in/kevin-cao7/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[35px] lg:h-[40px] text-blue-500 hover:text-blue-700"
              />
            </Link>
            <Link
              href={"https://github.com/klevun7"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[35px] lg:h-[40px] text-slate-800 hover:text-black"
              />
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="flex gap-8 lg:gap-10 flex-col items-center">
          <div className="flex flex-col items-center">
            <h1 className="font-satoshi text-3xl lg:text-4xl font-bold">About Me</h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:items-start gap-8 lg:gap-0">
            <div className="flex">
              <Image
                src={"/kevin.jpg"}
                width={350}
                height={350}
                className="rounded-lg hidden lg:block"
                alt="Kevin's profile picture"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-satoshi">
                I&apos;m a recent Computer Science and Business graduate from the University of California,
                Riverside. I&apos;m passionate about fullstack development
                and I am hoping to expand my knowledge on distributed systems
                and cloud computing. In my free time I enjoy cooking and trying
                out new restaurants.
              </p>

              <div className="flex flex-col sm:flex-row mt-8 lg:mt-10 gap-4 lg:gap-10 items-center justify-center lg:justify-start">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 w-full sm:w-auto min-w-[120px] cursor-pointer border-none rounded-md bg-slate-800 text-white hover:bg-blue-700 font-satoshi text-center"
                >
                  Resume
                </a>
                <a
                  href="mailto:kevincao5558@gmail.com"
                  className="inline-block font-satoshi transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 w-full sm:w-auto min-w-[120px] cursor-pointer border-none rounded-md bg-slate-800 text-white hover:bg-blue-700 text-center"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <div id="projects"></div>
        <div className=" lg:m-8 lg:p-4">
          <h1 className="text-3xl lg:text-4xl font-bold font-satoshi text-center mb-8">Projects</h1>
          <div className="mt-14 flex flex-col gap-8 items-center px-4">
            <ProjectCard
              projectUrl={"https://github.com/klevun7/Style-Swiper"}
              title={"StyleSwiper"}
              imageUrl={"/styleswiper.png"}
              description={
                "A clothing discovery app built with Nextjs and Firebase. Built with account management and personalized tinder-like swiping to discover new fashion trends"
              }
            />
            <ProjectCard
              projectUrl={"https://github.com/klevun7/matchanotes"}
              title={"MatchaNotes"}
              imageUrl={"/matchanotes2.png"}
              description={
                "A full-stack web app for discovering, reviewing, and searching matcha powders, featuring full-text search, user tasting notes, and curated product details."
              }
            />
            <ProjectCard
              projectUrl={"https://github.com/klevun7/devlink"}
              title={"DevLink"}
              imageUrl={"/sysdia.png"}
              description={
                "A platform for new-grads to find job opportunities as soon as they are posted. Built with Go and AWS SES for email notifications."
              }
            />
            <ProjectCard
              projectUrl={"https://github.com/klevun7/sf_proposition_history"}
              title={"SF Proposition History"}
              imageUrl={"/sf3.png"}
              description={
                "Historic Ballot Measure data within the city of San Francisco with multi-lingual support and data visualizations"
              }
            />
            <ProjectCard
              projectUrl={"https://github.com/klevun7/pyElasticSearch"}
              title={"NBA PyElasticSearch"}
              imageUrl={"/pyes.png"}
              description={
                "Built with Python and Flask, utilizing Elasticsearch for efficient data retrieval and search capabilities on NBA data."
              }
            />
          </div>
        </div>
      </div>

      {/* Chicken Component - Hidden on mobile */}
      <div className="hidden lg:block">
        <Chicken />
      </div>
    </div>
  );
}