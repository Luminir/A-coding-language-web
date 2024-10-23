import React from 'react'
import HowToTest from './HowToTest'
import TestVerTwo from './TestVerTwo'
import TestVerThree from './TestVerThree'

const PrintFunctionPage = () => {
  return (
    <>
        <header>✨Print functions</header>
                <h3 className=' p-4 font-xl font-semibold'>⭐ Math Printing:</h3>
                <HowToTest/>
                <TestVerTwo/>
                <h3 className=' p-4 font-xl font-semibold'>⭐ String Printing:</h3>
                <HowToTest/>
                <TestVerThree/>
    </>
  )
}

export default PrintFunctionPage