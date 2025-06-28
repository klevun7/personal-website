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

export default function Home() {
  return (
    <div id="home" className="flex">
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex flex-col gap-28 min-h-[80vh] mt-36">
          <div className="flex">
            <h1 className="text-8xl font-bold font-satoshi">
              hey i&rsquo;m kevin!
            </h1>
          </div>

          <div className="flex">
            <span className=" font-satoshi text-3xl text-md text-center">
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

          <div className="flex gap-10">
            <Link
              href={"https://www.linkedin.com/in/kevin-cao7/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-blue-500 hover:text-blue-700"
              />
            </Link>
            <Link
              href={"https://github.com/klevun7"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-slate-800 hover:text-black"
              />
            </Link>
          </div>
        </div>

        <div id="about" className="flex gap-10 flex-col">
          <div className="flex flex-col items-center">
            <h1 className=" font-satoshi text-4xl font-bold">About Me</h1>
          </div>

          <div className="flex justify-evenly">
            <div className="flex">
              <Image
                src={"/kevin.jpg"}
                width={300}
                height={300}
                className="rounded-lg xs:hidden sm:hidden md:hidden lg:block xl:block"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <p className="text-3xl font-satoshi">
                I&apos;m a rising senior at the University of California,
                Riverside majoring in Computer Science with Business
                Applications. I&apos;m passionate about fullstack development
                and I am hoping to expand my knowledge on distributed systems
                and cloud computing! In my free time I enjoy cooking and trying
                out new restaurants.
              </p>

              <div className="flex mt-10 gap-10">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-slate-800 text-white hover:bg-blue-700 font-satoshi text-center"
                >
                  Resume
                </a>
                <a
                  href="mailto:kevincao5558@gmail.com"
                  className="inline-block font-satoshi transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-slate-800 text-white hover:bg-blue-700 text-center"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="flex flex-col items-center">
          <h1 className="text-4xl font-bold font-satoshi">Skills</h1>
        </div>

        <div className="grid grid-rows-2 grid-flow-col gap-10 justify-evenly items-center">
          <Image
            src={"/icons/cpp.svg"}
            width={40}
            height={40}
            alt=""
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-black"
          />
          <FontAwesomeIcon
            icon={faPython}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px]"
          />
          <FontAwesomeIcon
            icon={faJs}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px]"
          />
          <FontAwesomeIcon
            icon={faReact}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px]"
          />
          <Image
            src={"/icons/nextjs.svg"}
            width={40}
            height={40}
            alt=""
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-black"
          />
          <Image
            src={"/icons/mysql.svg"}
            width={40}
            height={40}
            alt=""
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-black"
          />
          <FontAwesomeIcon
            icon={faAws}
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px]"
          />
          <Image
            src={"/icons/tailwindcss.svg"}
            width={40}
            height={40}
            alt=""
            className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[40px] text-black"
          />
        </div>

        <div id="projects"></div>
        <div className="flex items-center flex-col m-8 p-8">
          <h1 className="text-4xl font-bold font-satoshi">Projects</h1>
          <ProjectCard
            projectUrl={"https://github.com/klevun7/Style-Swiper"}
            title={"StyleSwiper"}
            imageUrl={"/styleswiper.png"}
            description={
              "A clothing discovery app built with Nextjs and Firebase. Built with account management and personalized tinder-like swiping to discover new fashion trends"
            }
          />
          <ProjectCard
            projectUrl={"https://github.com/klevun7/Style-Swiper"}
            title={"MatchaNotes"}
            imageUrl={"/matchanotes.png"}
            description={
              "A fullstack application allowing users to discover different matcha brands and learn about the unique flavor profiles"
            }
          />
        </div>
      </div>
      <div className="lg:block hidden">
        <Chicken />
      </div>
    </div>
  );
}
