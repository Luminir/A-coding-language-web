import React from 'react'

const SyntaxPage = () => {
  return (
    <>
        <header className='pb-10'>✨Syntax</header>
                <div className="px-4">
                <p className='font-semibold'>How to define variables:</p>
                <p>The holder of variables will be hightlighted in <span className='text-yellow-600'>Yellow</span>.</p>
                <p>Reprensting the "LET" in javascript, as they can hold Interger & String.</p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>Able</code>
                </div>
                <p className='font-semibold'>Print Function:</p>
                <p>The holder of variables will be hightlighted in <span className='text-yellow-600'>Yellow</span>.</p>
                <p>Reprensting the "print" in python, as they will print out the result: String or Integer.</p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>CuCu<span className=' text-blue-500'>(</span><span className=' text-blue-500'>)</span></code>
                </div>
                <p className='font-semibold'>Applying:</p>
                <p>Using Able to STORE variables <span className='text-yellow-600'>Yellow</span>.</p>
                <div className="my-4 sm:flex sm:justify-center grid grid-rows-2 gap-2">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>Able <code className='text-green-600'>x = 5;</code> //For integer</code>
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>Able <code className='text-green-600'>x = #hello world#;</code> // For string</code>
                </div>
                <p>The try to print by using:</p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>CuCu<span className=' text-blue-500'>(</span><span className='text-green-600'>x</span><span className=' text-blue-500'>)</span>;</code>
                </div>
                <p className=' text-red-600 font-bold'>NOTE: Code should be on the SAME LINE and separate each statement by ";", like this:</p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>Able
                        <span className=' text-green-600'> x = 20 + 15;</span>
                        <span className="text-yellow-500"> CuCu</span>
                        <span className=' text-blue-500'>(</span>
                        <span className='text-green-600'>x</span><span className=' text-blue-500'>)</span>
                        ;
                    </code>
                </div>
                <p className='font-semibold mt-[100px] underline'>PROBLEM OF SYNTAX:</p>
                <p className=' text-red-600 font-bold'>
                    - Cannot Append string together:
                </p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-yellow-500 rounded-2xl'>Able
                        <span className=' text-red-600'> x = #hello# + #world#;</span>
                        <span className="text-yellow-500"> CuCu</span>
                        <span className=' text-blue-500'>(</span>
                        <span className='text-green-600'>x</span><span className=' text-blue-500'>)</span>
                        ;
                    </code>
                </div>
                <p className=' text-red-600 font-bold'>
                    - Cannot Perform *, //, / :
                </p>
                <div className="my-4 flex justify-center">
                    <code className=' p-3 bg-black text-red-500 rounded-2xl'>Able
                        <span className=' text-red-600'> x = 8 * 4;</span><br/>
                        <span className="text-red-500"> CuCu</span>
                        <span className=' text-blue-500'>(</span>
                        <span className='text-red-600'>x</span><span className=' text-blue-500'>)</span>
                        ;
                    </code>
                </div>
                </div>
    </>
  )
}

export default SyntaxPage