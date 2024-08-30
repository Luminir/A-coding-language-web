// src/lib/parser.ts
import { Token } from './lexer';

export interface ASTNode {
  type: string;
  name?: string;
  value?: string | number;
  left?: ASTNode;
  right?: ASTNode;
}

export class Parser {
  private tokens: Token[];
  private current = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): ASTNode | null {
    if (this.current < this.tokens.length) {
      const token = this.tokens[this.current];

      if (token.type === "KEYWORD" && token.value === "Able") {
        return this.parseVariableDeclaration();
      } else if (token.type === "KEYWORD" && token.value === "CuCu") {
        return this.parsePrintStatement();
      } else if (token.type === "NUMBER" || token.type === "IDENTIFIER") {
        return this.parseExpression();
      }
    }

    throw new Error(`Unexpected token: ${this.tokens[this.current]?.value}`);
  }

  private parseVariableDeclaration(): ASTNode {
    this.current++; // Move past 'Able'
    const nameToken = this.tokens[this.current++];
    this.expectToken("EQUAL"); // Expect '='
    const value = this.parseExpression();
    this.expectToken("SEMICOLON"); // Expect a semicolon

    return {
      type: "VariableDeclaration",
      name: nameToken.value,
      left: value,
    };
  }

  private parsePrintStatement(): ASTNode {
    this.current++; // Move past 'CuCu'
    this.expectToken("LPAREN"); // Expect '('
    const expression = this.parseExpression();
    this.expectToken("RPAREN"); // Expect ')'
    this.expectToken("SEMICOLON"); // Expect a semicolon

    return {
      type: "PrintStatement",
      left: expression,
    };
  }

  private parseExpression(): ASTNode {
    const token = this.tokens[this.current];
    this.current++;

    if (token.type === "NUMBER") {
      return {
        type: "NumberLiteral",
        value: Number(token.value),
      };
    } else if (token.type === "IDENTIFIER") {
      return {
        type: "Identifier",
        value: token.value,
      };
    } else {
      throw new Error(`Unexpected token type: ${token.type}`);
    }
  }

  private expectToken(expectedType: string): void {
    const token = this.tokens[this.current];
    if (token.type === expectedType) {
      this.current++;
    } else {
      throw new Error(`Expected token type ${expectedType} but found ${token.type}`);
    }
  }
}
