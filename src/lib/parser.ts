// src/lib/parser.ts
import { Token } from './lexer';

export type ASTNode = {
  type: string;
  value?: string;
  left?: ASTNode;
  right?: ASTNode;
};

export class Parser {
  private tokens: Token[];
  private currentTokenIndex: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  public parse(): ASTNode {
    return this.parseExpression();
  }

  private parseExpression(): ASTNode {
    let node = this.parseTerm();

    while (this.match('PLUS', 'MINUS')) {
      const operator = this.tokens[this.currentTokenIndex];
      this.advance();
      const rightNode = this.parseTerm();
      node = { type: 'BinaryExpression', left: node, right: rightNode, value: operator.value };
    }

    return node;
  }

  private parseTerm(): ASTNode {
    const token = this.tokens[this.currentTokenIndex];
    if (this.match('NUMBER')) {
      this.advance();
      return { type: 'NumberLiteral', value: token.value };
    }

    throw new Error(`Unexpected token: ${token.type}`);
  }

  private match(...types: string[]): boolean {
    return this.currentTokenIndex < this.tokens.length && types.includes(this.tokens[this.currentTokenIndex].type);
  }

  private advance() {
    this.currentTokenIndex++;
  }
}



