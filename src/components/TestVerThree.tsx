import React from 'react'

const TestVerThree = () => {
  return (
    <>
    <section className="grid place-items-center">
        <div className="testbox">
                    <div className="testbox-font font-bold">Test Case 1: Printing String with CuCu</div>
                    <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Input:</p>
                            <pre className="font-mono">
                                Able x = #hello#;{"\n"}
                                CuCu(x);
                            </pre>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Expected Interpreted Result:</p>
                            <p className="font-mono">hello</p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Real Interpreted Result:</p>
                            <p className="font-mono">hello</p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Lexer:</p>
                            <p className="font-mono">
                                Should tokenize: <br /> Able, x, =, #hello#, CuCu, (, x, ), and ;
                            </p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Parser:</p>
                            <p className="font-mono">
                                Should generate an AST for a variable declaration and a print statement with a string.
                            </p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Interpreter:</p>
                            <p className="font-mono">
                                Should store x as the string 'hello' and print it out when CuCu(x) is called.
                            </p>
                        </div>
                    </div>
                </div>
    </section>
    </>
  )
}

export default TestVerThree