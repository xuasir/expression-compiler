export enum TokenType {
  KEYWORD = 'KEYWORD',
  VARIABLE = 'VARIABLE',
  OPERATOR = 'OPERATOR',
  BRACKET = 'BRACKET',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  STRING = 'STRING'
}

const TypeKeyword = ['num', 'bool', 'string', 'void']

export class Token {
  constructor(private _type: TokenType, private _value: string) {}

  get type(): TokenType {
    return this._type
  }

  get value(): string {
    return this._value
  }

  isVariable() {
    return this._type === TokenType.VARIABLE
  }

  isScaler() {
    return (
      this._type === TokenType.NUMBER ||
      this._type === TokenType.STRING ||
      this._type === TokenType.BOOLEAN
    )
  }

  isType() {
    return TypeKeyword.includes(this._value)
  }

  toString() {
    return `type: ${this._type}, value: ${this._value}`
  }
}

export type IToken = InstanceType<typeof Token>
