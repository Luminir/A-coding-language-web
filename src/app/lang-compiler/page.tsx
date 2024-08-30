// src/app/lang-compiler/page.tsx
'use client';

import React, { useState } from 'react';
import { interpretCode, compileCode } from '../../lib'; // Adjust the path to match your project structure

const LangCompilerPage = () => {
  const [code, setCode] = useState('Able x = 342; CuCu(x);');
  const [interpretationResult, setInterpretationResult] = useState('');
  const [compiledCode, setCompiledCode] = useState('');

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
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={5} cols={40} />
      <button onClick={handleRun}>Run Code</button>
      <h2>Interpreted Result:</h2>
      <pre>{interpretationResult}</pre>
      <h2>Compiled Code:</h2>
      <pre>{compiledCode}</pre>
    </div>
  );
};

export default LangCompilerPage;
