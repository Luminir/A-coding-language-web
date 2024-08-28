import { ASTNode } from './parser';

export class Compiler {
  public compile(node: ASTNode): string {
    switch (node.type) {
      case 'NumberLiteral':
        return node.value!;
      case 'BinaryExpression':
        const left = this.compile(node.left!);
        const right = this.compile(node.right!);
        return `(${left} ${node.value} ${right})`;
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }
}
