import { ASTNode } from './parser';

export class Compiler {
  public compile(node: ASTNode): string {
    switch (node.type) {
      case 'NumberLiteral':
        return node.value!.toString();
      case 'BinaryExpression':
        const left = this.compile(node.left!);
        const right = this.compile(node.right!);
        return `(${left} ${node.value} ${right})`;
      case 'VariableDeclaration':
        const varValue = this.compile(node.left!);
        return `let ${node.name} = ${varValue};`;
      case 'Identifier':
        return node.value!.toString();
      case 'PrintStatement':
        const valueToPrint = this.compile(node.left!);
        return `console.log(${valueToPrint});`;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
}