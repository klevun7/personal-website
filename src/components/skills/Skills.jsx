import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faReact,
  faJs,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center gap-12 lg:gap-24">
      <h1 className="text-3xl lg:text-4xl font-bold font-satoshi">Skills</h1>

      <div className="grid grid-cols-4 lg:grid-rows-2 lg:grid-flow-col gap-10 lg:gap-20 justify-items-center items-center">
        <Image
          src={"/icons/go.svg"}
          width={50}
          height={50}
          alt="Go"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/cpp.svg"}
          width={50}
          height={50}
          alt="C++"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/python.svg"}
          width={50}
          height={50}
          alt="Python"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/javascript.svg"}
          width={50}
          height={50}
          alt="JavaScript"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/react.svg"}
          width={50}
          height={50}
          alt="React"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/typescript.svg"}
          width={50}
          height={50}
          alt="TypeScript"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/nextjs.svg"}
          width={50}
          height={50}
          alt="Next.js"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/nodejs.svg"}
          width={50}
          height={50}
          alt="Node.js"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/mongodb.svg"}
          width={50}
          height={50}
          alt="MongoDB"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/html5.svg"}
          width={50}
          height={50}
          alt="html5"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/mysql.svg"}
          width={50}
          height={50}
          alt="MySQL"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/postgres.svg"}
          width={50}
          height={50}
          alt="PostgreSQL"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/firebase.svg"}
          width={50}
          height={50}
          alt="Firebase"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/aws.svg"}
          width={50}
          height={50}
          alt="AWS"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/docker.svg"}
          width={50}
          height={50}
          alt="Docker"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
        <Image
          src={"/icons/tailwindcss.svg"}
          width={50}
          height={50}
          alt="Tailwind CSS"
          className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 h-[50px] lg:h-[60px] text-black"
        />
      </div>
    </div>
  );
};

export default Skills;