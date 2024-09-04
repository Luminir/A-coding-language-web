import { ASTNode } from './parser';

export class Interpreter {
  private environment: Record<string, string | number> = {};

  public interpret(node: ASTNode): string | number | undefined {
    switch (node.type) {
      case 'NumberLiteral':
        console.log("Interpreting node type:", node.type, "with value:", node.value);
        return Number(node.value);
      case 'StringLiteral': // Handle string literals
      console.log("Interpreting node type:", node.type, "with value:", node.value);
        return node.value;
      case 'BinaryExpression':
        console.log("Interpreting node type:", node.type, "with value:", node.value);
        const left = this.interpret(node.left!);
        const right = this.interpret(node.right!);
        if (typeof left === 'number' && typeof right === 'number') {
          return this.evaluateBinaryExpression(left, right, node.value!.toString());
        }
        throw new Error('Invalid types for binary expression');
      case 'VariableDeclaration':
        console.log("Interpreting node type:", node.type, "with value:", node.value);
        const value = this.interpret(node.left!);
        if (typeof value !== 'undefined' && typeof node.name === 'string') {
          this.environment[node.name] = value;
          return value;
        }
        return undefined;
      case 'Identifier':
        console.log("Interpreting node type:", node.type, "with value:", node.value);
        if (typeof node.value === 'string') {
          const varName = node.value;
          if (this.environment[varName] !== undefined) {
            return this.environment[varName];
          }
          throw new Error(`Undefined variable: ${varName}`);
        }
        return undefined;
      case 'PrintStatement':
        console.log("Interpreting node type:", node.type, "with value:", node.value);
        const valueToPrint = this.interpret(node.left!);
        if (valueToPrint !== undefined) {
          console.log(valueToPrint);
        }
        return valueToPrint;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
  

  private evaluateBinaryExpression(left: number, right: number, operator: string): number {
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        if (right !== 0) {
          return left / right;
        } else {
          throw new Error('Division by zero');
        }
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  }
}

