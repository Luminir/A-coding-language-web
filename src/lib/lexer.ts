// import fs from 'fs/promises';

// export enum TokenType {
//     OpenParentheses,
//     CloseParentheses,
//     BinaryOperator, // Fixed typo
//     Equals,
//     Number,
//     Identifier,
//     Let,
// }

// const KEYWORDS: Record<string, TokenType> = {
//     "let": TokenType.Let,
// }

// export interface Token {
//     value: string;
//     type: TokenType;
// }

// function token(value = "", type: TokenType): Token {
//     return { value, type };
// }

// function isAlpha(srcSentence: string) {
//     return srcSentence.toUpperCase() != srcSentence.toLowerCase();
// }

// function isInt(srcSentence: string) {
//     const char = srcSentence.charCodeAt(0);
//     const bounds = ['0'.charCodeAt(0), '9'.charCodeAt(0)];
//     return char >= bounds[0] && char <= bounds[1];
// }

// function isSkippable(srcSentence: string) {
//     return srcSentence == ' ' || srcSentence == '\n' || srcSentence == '\t';
// }

// export function tokenize(srcCode: string): Token[] {
//     const tokens = new Array<Token>();
//     const srcSentence = srcCode.split('');

//     while (srcSentence.length > 0) {
//         if (srcSentence[0] == '(') {
//             tokens.push(token(srcSentence.shift()!, TokenType.OpenParentheses));
//         } else if (srcSentence[0] == ')') {
//             tokens.push(token(srcSentence.shift()!, TokenType.CloseParentheses));
//         } else if (["+", "-", "*", "/"].includes(srcSentence[0])) {
//             tokens.push(token(srcSentence.shift()!, TokenType.BinaryOperator));
//         } else if (srcSentence[0] == '=') {
//             tokens.push(token(srcSentence.shift()!, TokenType.Equals));
//         } else if (isInt(srcSentence[0])) {
//             let numberString = '';
//             while (srcSentence.length > 0 && isInt(srcSentence[0])) {
//                 numberString += srcSentence.shift();
//             }
//             tokens.push(token(numberString, TokenType.Number));
//         } else if (isAlpha(srcSentence[0])) {
//             let unknownStr = ''
//             while (srcSentence.length > 0 && isAlpha(srcSentence[0])) {
//                 unknownStr += srcSentence.shift();
//             }

//             const reserved = KEYWORDS[unknownStr];
//             if (reserved == undefined) {
//                 tokens.push(token(unknownStr, TokenType.Identifier));
//             } else {
//                 tokens.push(token(unknownStr, reserved));
//             }
//         } else if (isSkippable(srcSentence[0])) {
//             srcSentence.shift();
//         } else {
//             console.log("Cannot understand the character, not found in lib: ", srcSentence[0]);
//             throw new Error("Invalid character in source code.");
//         }
//     }
//     return tokens;
// }

// async function main() {
//     const src = await fs.readFile("./test.txt", "utf-8");
//     const tokens = tokenize(src);
//     for (const token of tokens) {
//         console.log(token);
//     }
// }

// main().catch(err => console.error(err));

// src/lib/lexer.ts
export type Token = {
  type: string;
  value: string;
};

export class Lexer {
  private input: string;
  private position: number;

  constructor(input: string) {
    this.input = input;
    this.position = 0;
  }

  private tokenTypes = [
    { regex: /^\d+/, type: "NUMBER" },
    { regex: /^Able\b/, type: "KEYWORD" },
    { regex: /^CuCu\b/, type: "KEYWORD" },
    { regex: /^[a-zA-Z_]\w*/, type: "IDENTIFIER" },
    { regex: /^=/, type: "EQUAL" },
    { regex: /^\+/, type: "PLUS" },
    { regex: /^-/, type: "MINUS" },
    { regex: /^;/, type: "SEMICOLON" },
    { regex: /^#([^#]*)#/, type: "STRING" },
    { regex: /^\(/, type: "LEFT_PAREN" },
    { regex: /^\)/, type: "RIGHT_PAREN" }
  ];

  getNextToken(): Token | null {
    while (this.position < this.input.length) {
      const str = this.input.slice(this.position);

      for (const { regex, type } of this.tokenTypes) {
        const match = regex.exec(str);
        if (match) {
          this.position += match[0].length;
          return { type, value: match[0] };
        }
      }

      if (str[0] === " ") {
        this.position++; // Skip whitespace
      } else {
        throw new Error(`Unexpected character: ${str[0]} at position ${this.position}`);
      }
    }

    return null; // End of input
  }

  tokenize(): Token[] {
    const tokens: Token[] = [];
    let token = this.getNextToken();

    while (token) {
      tokens.push(token);
      token = this.getNextToken();
    }

    return tokens;
  }
}

