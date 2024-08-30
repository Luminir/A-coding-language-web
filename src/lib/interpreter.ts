// src/lib/interpreter.ts
import { ASTNode } from './parser';

export class Interpreter {
  private environment: Record<string, string | number> = {};

  public interpret(node: ASTNode): string | number | undefined {
    switch (node.type) {
      case 'NumberLiteral':
        return Number(node.value);
      case 'VariableDeclaration':
        const value = this.interpret(node.left!);
        if (typeof value !== 'undefined' && typeof node.name === 'string') {
          this.environment[node.name] = value;
          return value;
        }
        return undefined;
      case 'Identifier':
        if (typeof node.value === 'string' && this.environment[node.value] !== undefined) {
          return this.environment[node.value];
        }
        throw new Error(`Undefined variable: ${node.value}`);
      case 'PrintStatement':
        const valueToPrint = this.interpret(node.left!);
        if (valueToPrint !== undefined) {
          console.log(valueToPrint);
        }
        return valueToPrint;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
}

