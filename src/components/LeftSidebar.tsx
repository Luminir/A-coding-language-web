import React from 'react'

interface LeftSidebarProps{
    selected: string | null;
    handleSelected: (pageId: string) => void;
}
const LeftSidebar:React.FC<LeftSidebarProps> = ({selected, handleSelected}) => {
  return (
    <>
            <ul className="list">
                <li>
                    <a href="#intro"
                    onClick={() => handleSelected('intro')}
                    className={`nav-link ${selected == 'intro'? 'font-extrabold': ''}`}>
                        Introduction
                    </a>
                </li>
                <li>
                    <a href="#getting-started"
                    onClick={() => handleSelected('getting-started')}
                    className={`nav-link ${selected == 'getting-started'? 'font-extrabold': ''}`}>
                        Getting Started
                    </a>
                </li>
                <li>
                    <a href="#basic-math"
                    onClick={() => handleSelected('basic-math')}
                    className={`nav-link ${selected == 'basic-math'? 'font-extrabold': ''}`}>Basic Math</a>
                </li>
                <li>
                    <a href="#Syntax" 
                    onClick={() => handleSelected('Syntax')}
                    className={`nav-link ${selected == 'Syntax' ? 'font-extrabold': ''}`}>Syntax</a>
                </li>
                <li>
                    <a href="#Print functions"
                    onClick={() => handleSelected('Print functions')}
                    className={`nav-link ${selected == 'Print functions' ? 'font-extrabold' : ''}`}>Print functions</a>
                </li>
            </ul>
    </>
  )
}

export default LeftSidebar