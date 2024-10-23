import Image from "next/image";
import logoIcon from '../../public/icons/Untitled-design.png'
import Navbar from "@/components/Navbar";
import ReactTypedDescript from "@/components/ReactTypedDescript";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar/>
      <div className=" w-full h-screen text-black bg-white flex flex-col items-center justify-center">
        <div className=" text-center font-extralight text-xl">
          <p>A Tran Nam Son's project</p>
          <p className=" text-5xl pt-5 font-extrabold text-pink-500">- LUMINIR.JS -</p>
        </div>
        <div className=" flex">
        <Image src={logoIcon} 
            width={400} 
            height={400}
            alt="Luminir.JS logo"
            className=" pb-2"/>
        </div>
        <p className='text-center text-3xl font-bold'>
              <ReactTypedDescript/>
        </p>
      </div>
      <div className=" w-full h-screen text-black bg-pink-400">
        <p>asdfasdf</p>
      </div>
    </main>
  );
}
