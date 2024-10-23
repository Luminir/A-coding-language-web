// src/app/lang-compiler/page.tsx
'use client';

import React, { useState } from 'react';
import { interpretCode, compileCode } from '../../lib'; // Adjust the path to match your project structure
import Navbar from '@/components/Navbar';

const LangCompilerPage = () => {
  const [code, setCode] = useState('Able x = 342; CuCu(x);');
  const [interpretationResult, setInterpretationResult] = useState('');
  const [compiledCode, setCompiledCode] = useState('');

  // Hightlight the codes i made
  const highlightCode = (text: String) => {
    // Keywords to be highlighted in yellow
    const keywords = ['Able', 'CuCu'];
    // Adding parentheses to the regex pattern
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b|([()])`, 'g');

    return text.replace(regex, (match, keyword, paren) => {
      if (keyword) {
        // Highlight keywords in yellow
        return `<span class="text-yellow-400">${keyword}</span>`;
      }
      if (paren) {
        // Highlight parentheses in blue
        return `<span class="text-blue-400">${paren}</span>`;
      }
      return match;
    });
  };

  const handleRun = () => {
    try {
      const interpretedOutput = interpretCode(code); // Interpret the code
      setInterpretationResult(interpretedOutput ? interpretedOutput.toString() : '');
      
      const compiledOutput = compileCode(code); // Compile the code
      setCompiledCode(compiledOutput);
    } catch (error) {
      setInterpretationResult(`Error: ${error}`);
      setCompiledCode('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md max-w-lg mx-auto mt-5">
      <div className="relative">
        {/* Displaying the highlighted code */}
        <div
          className="textareay"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
        {/* textarea for user input */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          cols={60}
          className="bg-transparent text-transparent caret-white p-4 rounded-lg border border-gray-600 font-mono w-full h-full resize-none relative z-10 focus:outline-none"
          style={{ color: 'transparent' }} // hide user text input
        />
      </div>
      <button
        onClick={handleRun}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all"
      >
        Run Code
      </button>
      <h2 className="mt-5 text-xl font-bold text-green-400">Interpreted Result:</h2>
      <pre className="bg-black text-green-300 p-3 rounded-lg font-mono whitespace-pre-wrap">{interpretationResult}</pre>
      
      <h2 className="mt-5 text-xl font-bold text-yellow-400">Compiled Code:</h2>
      <pre className="bg-black text-yellow-300 p-3 rounded-lg font-mono whitespace-pre-wrap">{compiledCode}</pre>
    </div>
    </>
  );
};

export default LangCompilerPage;
