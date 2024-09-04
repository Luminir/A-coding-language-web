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
        console.log("Parsing variable declaration Able");
        return this.parseVariableDeclaration();
      } else if (token.type === "KEYWORD" && token.value === "CuCu") {
        console.log("Parsing variable declaration CucCU");
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
    const expression = this.parseExpression(); // Directly parse the expression
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
        value: token.value,
      };
    } else if (token.type === "STRING") { // Handle strings
      return {
        type: "StringLiteral",
        value: token.value.slice(1, -1), // Remove surrounding `#`
      };
    } else {
      return {
        type: "Identifier",
        value: token.value,
      };
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
