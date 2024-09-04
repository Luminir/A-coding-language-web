import Image from "next/image";
import logoIcon from '../../public/icons/Untitled-design.png'
import React from 'react'

const Navbar = () => {
  return (
    <header className=" w-full h-16">
        <nav className=" top-navbar">
          <div className=" bg-white flex items-center ">
          <Image src={logoIcon} 
            width={50} 
            height={50}
            alt="Luminir.JS logo"
            className=" pb-2"/>
            <h1 className=" orbitron">Luminir.js</h1>
          </div>
            <div className=" bg-blue-300 font-semibold flex gap-10 p-2">
            <a href="/" className="hover:text-green-800">Home</a>
            <a href="/documentation" className="hover:text-green-800">Docs</a>
            <a href="/lang-compiler" className="hover:text-green-800">Compiler</a>
            <a href="/about-me" className="hover:text-green-800">About me</a>
            </div>
        </nav>
      </header>
  )
}

export default Navbar