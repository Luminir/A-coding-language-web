'use client'

import Image from "next/image";
import logoIcon from '../../public/icons/Untitled-design.png'
import React, { useEffect, useState } from 'react'
import MenuIcon from '../../public/icons/menu.svg'
import { usePathname } from "next/navigation";
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";

const Navbar = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  const selectedPage = usePathname();

  // PROBLEM: when the menu dropdown is still active and change size
  // The menu svg is gone, not the drop down
  // wrap in user effect to ensures code in run on client/user side
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);  // Close the menu
      }
    };
  
    window.onresize = () => {
      handleResize()
    }
  }, [])

  // Toggle show and hide
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  };

  const isActive = (pathId: String) => {
    if (selectedPage === pathId){
      return 'font-extrabold'
    } else {
      return ''
    }
  }
  
  return (
    <header className=" w-full h-16 sticky top-0 z-20">
        <nav className=" top-navbar">
          <div className=" flex items-center ">
          <Image src={logoIcon} 
            width={50} 
            height={50}
            alt="Luminir.JS logo"
            className=" pb-2"/>
            <h1 className=" orbitron">Luminir.js</h1>
          </div>
            <div className={` bg-blue-300 font-semibold gap-10 py-2 px-5
             md:flex ${menuOpen ? 'absolute flex flex-col top-[62px] right-0 text-center p-5 border-black border-2 border-r-4 border-b-4 md': 'hidden'}`}>
            <a 
            href="/" 
            className={`hover:text-green-800 ${isActive('/')}`}>Home</a>
            <a 
            href="/documentation" 
            className={`hover:text-green-800 ${isActive('/documentation')}`}>Docs</a>
            
            <a 
            href="/lang-compiler" 
            className={`hover:text-green-800 ${isActive('/lang-compiler')}`}>Compiler</a>
            <a 
            href="/about-me" 
            className={`hover:text-green-800 ${isActive('/about-me')}`}>About me</a>
            </div>

            <Image 
            width={50} 
            height={50}
            src={MenuIcon}
            alt="Menu"
            className={` absolute right-8 cursor-pointer md:hidden`}
            onClick={() => handleMenuOpen()}/>

        </nav>
      </header>
  )
}

export default Navbar