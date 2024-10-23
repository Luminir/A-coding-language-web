import React from 'react'
import HowToTest from './HowToTest'
import TestVerOne from './TestVerOne'

const BasicMathPage = () => {
  return (
    <>
        <header>✨Basic Math</header>
                <p>Can manually write and expected result when click "Run code" without the usage of variables</p>
                <HowToTest/>
                <TestVerOne/>
    </>
  )
}

export default BasicMathPage