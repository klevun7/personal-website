
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex gap-[100px] ">
      <div className="flex flex-1 flex-col gap-12 ">
        <div className="flex flex-col gap-32 min-h-[60vh] mt-36">
          <div className="flex">
            <h1 className=" text-5xl font-bold">hey i'm kevin!</h1>
          </div>
          <div className="flex">
            <p className="text-md text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex gap-5">
            <button className="transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-full bg-blue-500 text-white hover:bg-blue-700 font-bold">
              Contact me
            </button>
            <button className=" transition ease-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-3 min-w-[120px] cursor-pointer border-none rounded-full bg-blue-500 text-white hover:bg-blue-700 font-bold">
              Resume
            </button>
          </div>
        </div>
       
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">some of my projects!</h1>
        </div>
         
          <div className="flex flex-col">
            <div className="flex flex-col gap-3 items-center">
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
  );
}
