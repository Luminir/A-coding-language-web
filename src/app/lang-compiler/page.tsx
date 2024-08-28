'use client'

import React, { useState } from 'react';
import { interpretCode, compileCode } from '../../lib'; // Import from index.ts

const LangCompilerPage = () => {
  const [code, setCode] = useState('2 + 2');
  const [interpretationResult, setInterpretationResult] = useState('');
  const [compiledCode, setCompiledCode] = useState('');

  const handleRun = () => {
    try {
      const interpretedOutput = interpretCode(code); // Interpret the code
      setInterpretationResult(interpretedOutput.toString());
      
      const compiledOutput = compileCode(code); // Compile the code
      setCompiledCode(compiledOutput);
    } catch (error) {
      setInterpretationResult(`Error: ${error}`);
      setCompiledCode('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple Language Compiler</h1>
      <textarea
        rows={5}
        cols={40}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      ></textarea>
      <button onClick={handleRun}>Run Code</button>
      <h2>Interpreted Result:</h2>
      <pre>{interpretationResult}</pre>
      <h2>Compiled Code:</h2>
      <pre>{compiledCode}</pre>
    </div>
  );
};

export default LangCompilerPage;
