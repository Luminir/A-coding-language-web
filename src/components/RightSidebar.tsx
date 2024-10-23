'use client';

import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PrintFunctionPage from './PrintFunctionPage'
import IntroductionPage from './IntroductionPage'
import GettingStartedPage from './GettingStartedPage'
import BasicMathPage from './BasicMathPage'
import SyntaxPage from './SyntaxPage'
import LeftSidebar from './LeftSidebar';

const RightSidebar: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelected = (pageId: string) => {
        setSelected(pageId); // set selected == pageId
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    // Default loading page is Introduction
    useEffect(() => {
        if (selected === null){
            setSelected('intro')
        }
    }, [selected])

  return (
    <>
      <div className="flex">
        <div className='left-sidebar'>
            <LeftSidebar selected={selected} handleSelected={handleSelected}/>
        </div>
       <main id='main-doc' className=' flex-auto'>
            {selected == 'intro' && (
                <section className="main-section" id='intro'>
                <IntroductionPage/>
                </section>
            )}
            {selected == 'getting-started' && (
                <section className="main-section" id='getting-started'>
                <GettingStartedPage/>
                </section>
            )}
            {selected == 'basic-math' && (
                <section className="main-section" id='basic-math'>
                <BasicMathPage/>
                </section>
            )}
            {selected == 'Syntax' && (
                <section className="main-section" id='Syntax'>
                <SyntaxPage/>
                </section>  
            )}
            {selected == 'Print functions' && (
                <section className="main-section" id='Print functions'>
                <PrintFunctionPage/>
                </section>
            )}
            <div className=' justify-evenly m-10 md:hidden gap-2 flex flex-col w-auto sm:flex-row'>
                <a className=' btn-doc' onClick={() => handleSelected('intro')} >Intro</a>
                <a className=' btn-doc' onClick={() => handleSelected('getting-started')}>Getting started</a>
                <a className=' btn-doc' onClick={() => handleSelected('basic-math')}>Basic Math</a>
                <a className=' btn-doc' onClick={() => handleSelected('Syntax')}>Syntax</a>
                <a className=' btn-doc' onClick={() => handleSelected('Print functions')}>Print functions</a>
            </div>
       </main>
      </div>
    </>
  )
}

export default RightSidebar