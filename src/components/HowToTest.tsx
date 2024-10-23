import React from 'react'

const HowToTest = () => {
  return (
    <>
    <section className="grid place-items-center">
        <div className="testbox text-red-600 text-center">
            <div className="text-lg font-bold">⚠️ How to Use These Test Cases</div>
            <div className="bg-gray-100 p-2 mt-2 border-2 border-black">
                <p className="font-semibold"> Enter each test case into the input box on your lang-compiler page.</p>
                <p className="font-semibold">Click the <span className=' bg-white p-2 rounded-md border-2 border-black'>Run Code</span> button to see both the interpreted result and the compiled code. </p>
                <p className="font-semibold">Verify the results against the expected output to ensure that your lexer, parser, interpreter, and compiler are functioning correctly.</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HowToTest