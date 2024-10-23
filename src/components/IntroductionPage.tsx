import React from 'react'

const IntroductionPage = () => {
  return (
    <>
        <header>✨Introduction</header>
                <br />
                <h1>Why Luminir was created?</h1>
                <p>Hello, My name is <span className='font-bold'>Trần Nam Sơn</span>, aka Luminir, aka Jackson, aka CucCu (at home nickname). 
                This is a project that inspired by 'When you meet your Hackathon oponents' videos online.
                Those characters in the videos are portrayed as rediculously smart.
                Starting out with funny achievements like: "Code in Binary", "Code since 3 years old", etc.
                One of which, occurs quite often, is "Code in their own coding language".
                Therefore, i think to myself, how hard can it be to make a coding language from the scratch.
                To be honest, it's hard as hell, ngl ☠️☠️☠️
                <br /><br />
                Even harder when I code in <span className=' text-blue-600 font-bold'>Typescript</span>, not in C or C++ or any Coding language that is closer to
                Machine Code.
                </p> <br />
                <h1>History of version</h1>
                <ol>
                    <li>28/08/2024: Build basic math calculation (Ver.1)</li>
                    <li>30/08/2024: Build variables and Enable printing for Interger (Ver.2)</li>
                    <li>04/09/2024: Build variables and Enable printing for String (Ver.3)</li>
                </ol>
                <h2>1. Build basic math calculation (Ver.1)</h2>
                <p>
                    Test Cases for My Simple Language Compiler
                    Here are some test cases to input into the compiler and interpreter. They cover basic arithmetic operations that your lexer, parser, interpreter, and compiler currently handle.
                </p>

                <h2>2. Build variables and Enable printing for Interger (Ver.2)</h2>
                <p>
                    This was a diffcult process, building & performing the basic arithmetic was much less problematic.
                    To be able to put it in a print functions and can give out input, modify the lexer and identify the
                    keywords for printing is another problem too.
                </p>
                <h2>3.Build variables and Enable printing for String (Ver.3)</h2>
                <p>
                    The toughest process of all, is trying to hold a String and Printing it.
                     Because, I will need to basically have to re-increment all the file and update them, which is a poor way to start a project.
                     Later on, this problem will met multiple limitations. 
                </p>
    </>
  )
}

export default IntroductionPage