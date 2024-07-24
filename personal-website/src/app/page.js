
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-[100px] ">
      <div className="flex flex-1 flex-col gap-12 ">
        <div className="flex flex-col gap-10 ">
          <h1 className=" text-5xl font-bold">hey i'm kevin!</h1>
          <div className="flex">
            <p className="text-md text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-5">
            <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white">Contact me</button>
            <button className="p-3 min-w-[120px] cursor-pointer border-none rounded-md bg-blue-500 text-white">Resume</button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <h3 className="text-2xl font-bold justify-center">Projects</h3>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-3">
              <h4 className=" text-xl font-bold">I'm Hungry</h4>
              <p className=" text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className=" text-xl font-bold">Mood-ify</h4>
              <p className=" text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            </div>
          </div>
        </div>




      </div>

    </div>
  );
}
