"use client"

import React from 'react'
import { ReactTyped } from 'react-typed'

const ReactTypedDescript = () => {
  return (
    <>
        <ReactTyped className='md:text-4xl sm:text-3xl text-2xl text-blue-600'
                            strings={['A NEW Coding language','Coded in Typescript', 'By Luminir', 'In NEXT.JS']} typeSpeed={60} backSpeed={80} loop/>.
    </>
  )
}

export default ReactTypedDescript