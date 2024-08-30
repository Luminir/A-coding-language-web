import { Lexer } from './lexer';
import { Parser } from './parser';
import { Interpreter } from './interpreter';
import { Compiler } from './compiler';
import { ASTNode } from './parser';

export function interpretCode(code: string): string | number {
  const lexer = new Lexer(code);
  const tokens = lexer.tokenize();
  const parser = new Parser(tokens);
  const ast = parser.parse();

  if (ast) {
    const interpreter = new Interpreter();
    const result = interpreter.interpret(ast);
    return result !== undefined ? result.toString() : 'Undefined result';
  }
  throw new Error('Error during interpretation.');
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
  throw new Error('Error during compilation.');
}



