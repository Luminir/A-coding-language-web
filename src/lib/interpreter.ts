// src/lib/interpreter.ts
import { ASTNode } from './parser';

export class Interpreter {
  public interpret(node: ASTNode): number {
    switch (node.type) {
      case 'NumberLiteral':
        return parseInt(node.value!);
      case 'BinaryExpression':
        const left = this.interpret(node.left!);
        const right = this.interpret(node.right!);
        switch (node.value) {
          case '+':
            return left + right;
          case '-':
            return left - right;
          default:
            throw new Error(`Unknown operator: ${node.value}`);
        }
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
}
