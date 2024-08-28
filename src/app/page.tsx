import Image from "next/image";
import logoIcon from '../../public/icons/Untitled-design.png'
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar/>
      <div className=" w-full h-screen text-black bg-white">
        <div className=" mt-20 text-center font-semibold text-2xl">
          <p>A Tran Nam Son's project</p>
          <p>A fully-fledged language for fun & personal usage</p>
        </div>
        <div className=" flex justify-center items-center">
        <Image src={logoIcon} 
            width={400} 
            height={400}
            alt="Luminir.JS logo"
            className=" pb-2"/>
        </div>
      </div>
      <div className=" w-full h-screen text-black bg-pink-400">
        <p>asdfasdf</p>
      </div>
    </main>
  );
}
