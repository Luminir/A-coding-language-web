import { Lexer } from './lexer';
import { Parser, ASTNode } from './parser';
import { Interpreter } from './interpreter';
import { Compiler } from './compiler';

export function interpretCode(code: string): string | number | undefined {
  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();
  
  if (ast) {
    const interpreter = new Interpreter();
    return interpreter.interpret(ast);
  }
}

export function compileCode(code: string): string {
  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();

  if (ast) {
    const compiler = new Compiler();
    return compiler.compile(ast);
  }

  return '';
}



