import React from 'react'

const TestVerTwo = () => {
  return (
    <>
    <section className="grid place-items-center">
        <div className="testbox">
                    <div className="testbox-font font-bold">Test Case 1: Variable Declaration and Printing Integer</div>
                    <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Input:</p>
                            <pre className="font-mono">
                                Able x = 342;{"\n"}
                                CuCu(x);
                            </pre>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Expected Interpreted Result:</p>
                            <p className="font-mono">342</p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Real Interpreted Result:</p>
                            <p className="font-mono">342</p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Lexer:</p>
                            <p className="font-mono">
                                Should tokenize: <br /> Able, x, =, 342, CuCu, (, x, ), and ;
                            </p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Parser:</p>
                            <p className="font-mono">
                                Should generate an AST for a variable declaration and a print statement.
                            </p>
                        </div>
                        <div className="border-b-2 border-black grid grid-cols-2">
                            <p className="font-mono font-bold">Interpreter:</p>
                            <p className="font-mono">
                                Should store x with the value 342 and print it out when CuCu(x) is called.
                            </p>
                        </div>
                    </div>
                </div>
    </section>
    </>
  )
}

export default TestVerTwo