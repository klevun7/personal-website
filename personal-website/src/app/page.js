import Image from "next/image";
import Chicken from "@/components/chicken/Chicken";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faLinkedin,
  faJs,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex flex-col gap-28 min-h-[80vh] mt-36">
          <div className="flex">
            <h1 className="text-8xl font-bold">hey i&rsquo;m kevin!</h1>
          </div>

          <div className="flex">
            <span className=" text-3xl text-md text-center">
              <Typewriter
                words={[
                  "aspiring fullstack software developer",
                  "learning more about cloud computing",
                  "trying to center a div",
                  "fried chicken lover",
                ]}
                loop={20}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <div className="flex gap-5">
            <button className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white hover:bg-blue-700 font-bold">
              Contact me
            </button>
            <button className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white hover:bg-blue-700 font-bold">
              Resume
            </button>
          </div>
        </div>

        <div className="flex gap-10 flex-col mb-11">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">About Me</h1>
          </div>

          <div className="flex justify-evenly">
            <div className="flex">
              <Image
                src={"/image.JPG"}
                width={300}
                height={300}
                className="rounded-lg flex"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <p className="text-3xl">
                I&apos;m a rising senior at the University of California,
                Riverside majoring in Computer Science with Business
                Applications. I&apos;m passionate about fullstack development
                and I am hoping to expand my knowledge on distributed systems
                and cloud computing! In my free time I enjoy cooking and trying
                out new restaurants.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Skills</h1>
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

        <div className="flex items-center flex-col m-8 p-8">
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>
      </div>
      <div className="flex">
        <Chicken />
      </div>
    </div>
  );
}
