import React, { useState } from 'react'
import Navbar from './Navbar'

const RightSidebar = () => {
  return (
    <>
      <Navbar/>
        <div>
            <ul className="list">
                <li>
                    <a href="#intro" className="nav-link">Introduction</a>
                </li>
                <li>
                    <a href="#getting-started" className="nav-link">Getting Started</a>
                </li>
                <li>
                    <a href="#info-2" className="nav-link">Info 2</a>
                </li>
            </ul>
        </div>
       <main id='main-doc'>
            <section className="main-section" id='intro'>
                <header>Introduction</header>
                <br />
                <p>Hello, My name is Trần Nam Sơn, aka Luminir, aka Jackson. 
                This is a project that inspired by 'When you meet your Hackathon oponents' videos online.
                Those characters in the videos are portrayed as rediculously smart.
                Starting out with funny achievements like: "Code in Binary", "Code since 3 years old", etc.
                One of which, occurs quite often, is "Code in their own coding language".
                Therefore, i think to myself, how hard can it be to make a coding language from the scratch.
                To be honest, it's hard as hell, ngl ☠️☠️☠️
                </p> <br />
                <p>History of version</p>
                <ol>
                    <li>28/08/2024: Build basic math calculation</li>
                    <li>30/08/2024: Build variable and printing</li>
                </ol>
                <p>
                    Test Cases for Your Simple Language Compiler
                    Here are some test cases to input into the compiler and interpreter. They cover basic arithmetic operations that your lexer, parser, interpreter, and compiler currently handle.

                    1. Basic Addition <br/>
                    Input: 2 + 3 <br/>
                    Expected Interpreted Result: 5 <br/>
                    Expected Compiled Code: (2 + 3) <br/>
                    2. Basic Subtraction <br/>
                    Input: 10 - 4 <br/>
                    Expected Interpreted Result: 6 <br/>
                    Expected Compiled Code: (10 - 4) <br/>
                    3. Addition with Multiple Digits <br/>
                    Input: 123 + 456 <br/>
                    Expected Interpreted Result: 579 <br/>
                    Expected Compiled Code: (123 + 456) <br/>
                    4. Subtraction with Multiple Digits
                    Input: 1000 - 500
                    Expected Interpreted Result: 500
                    Expected Compiled Code: (1000 - 500)
                    5. Combination of Addition and Subtraction
                    Input: 8 + 2 - 3
                    Expected Interpreted Result: 7
                    Expected Compiled Code: ((8 + 2) - 3)
                    6. Single Number Input
                    Input: 42
                    Expected Interpreted Result: 42
                    Expected Compiled Code: 42
                    7. Zero as an Operand
                    Input: 0 + 5
                    Expected Interpreted Result: 5
                    Expected Compiled Code: (0 + 5)
                    8. Negative Result
                    Input: 3 - 10
                    Expected Interpreted Result: -7
                    Expected Compiled Code: (3 - 10)
                    9. Large Numbers Addition
                    Input: 1000000 + 2500000
                    Expected Interpreted Result: 3500000
                    Expected Compiled Code: (1000000 + 2500000)
                    10. Chain of Operations
                    Input: 1 + 2 + 3 + 4 - 5
                    Expected Interpreted Result: 5
                    Expected Compiled Code: (((1 + 2) + 3) + 4) - 5
                    How to Use These Test Cases
                    Enter each test case into the input box on your lang-compiler page.
                    Click the "Run Code" button to see both the interpreted result and the compiled code.
                    Verify the results against the expected output to ensure that your lexer, parser, interpreter, and compiler are functioning correctly.
                </p>
            </section>
            <section className="main-section" id='getting-started'>
                <header>Getting Stared</header>
                <br />
                <p>Steps in getting to know the Luminir.js</p>
                <ol>
                    <li>Read the Document</li>
                    <li>Code in Web's Compiler</li>
                </ol>
            </section>
            <section className="main-section" id='info-2'>
                <header>Info 2 - Syntax</header>
                <p></p>
            </section>
       </main>
    </>
  )
}

export default RightSidebar