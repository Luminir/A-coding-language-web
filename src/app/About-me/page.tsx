import Image from "next/image";
import React from "react"
import logoIcon from '../../../public/icons/Untitled-design.png'
import Navbar from "@/components/Navbar";

const page = () => {
    return (
        <>
        <Navbar/>
        <main className=" flex min-h-screen items-center justify-center gap-2">
            <div className="grid grid-flow-row gap-3">
                <div className=" flex gap-3">
                    <div className=" widget bg-white h-[400px] w-[400px] p-3 grid">
                        <p className="text-xl flex">Nickname (self made): Lumminir</p>
                        <p className="text-xl flex">Date of birth: 28/03/2005</p>
                        <p className="text-xl flex">FB: Tnstran</p>
                        <p className="text-xl flex">Insta: Tns.Tran</p>
                        <p className="text-xl flex">Email: trannamson0328@gmail.com</p>
                    </div>
                    <div className=" widget bg-white h-[400px] w-[300px]">
                        <Image src={logoIcon} 
                        width={300} 
                        height={400}
                        alt="Luminir.JS logo"
                        className=" pb-2"/>
                        <p className="text-xl flex px-6">My Name: Trần Nam Sơn</p>
                    </div>
                </div>
                <div className="widget bg-white h-[200px] w-[712px] p-6">
                    <p className=" text-center font-semibold">
                        " I know nothing about coding before University, only know about coding through a course online.
                        <br />
                        Before it, in my mind I never think I would do programming, as I labeled myself as unsuitable.
                        <br />
                        After that course, I changed my major at the very last minutes, very risky.
                        <br />
                        Now, I do really like it! "
                    </p>

                </div>
            </div>    
        </main>
        </>
    )
}

export default page;