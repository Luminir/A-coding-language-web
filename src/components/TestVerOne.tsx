import React from 'react'

const TestVerOne = () => {
  return (
    <>
        <section className=' grid place-items-center min-h-screen flex'>
        <div className="testbox ">
                        <div className="testbox-font font-bold">Test Case 1: Basic Addition</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">2 + 3</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">5</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(2 + 3)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 2: Basic Subtraction</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">10 - 4</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">6</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(10 - 4)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 3: Addition with Multiple Digits</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">123 + 456</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">579</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(123 + 456)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 4: Subtraction with Multiple Digits</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">1000 - 500</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">500</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(1000 - 500)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 5: Combination of Addition and Subtraction</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">8 + 2 - 3</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">7</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">((8 + 2) - 3)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 6: Single Number Input</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">42</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">42</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">42</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 7: Zero as an Operand</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">0 + 5</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">5</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(0 + 5)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 8: Negative Result</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">3 - 10</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">-7</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(3 - 10)</p>
                            </div>
                        </div>
                    </div>

                    <div className="testbox">
                        <div className="testbox-font font-bold">Test Case 9: Large Numbers Addition</div>
                        <div className="grid grid-rows-1 gap-4 bg-gray-100 p-2 mt-2 border-2 border-black">
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Input:</p>
                                <p className="font-mono">1000000 + 1000000</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Interpreted Result:</p>
                                <p className="font-mono">2000000</p>
                            </div>
                            <div className="border-b-2 border-black grid grid-cols-2">
                                <p className="font-mono font-bold">Expected Compiled Code:</p>
                                <p className="font-mono">(1000000 + 1000000)</p>
                            </div>
                        </div>
                    </div>
        </section>
    </>
  )
}

export default TestVerOne