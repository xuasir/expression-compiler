import TokenType from './tokenType'

class Token {
  constructor(type, value) {
    this._type = type
    this._value = value
  }

  getType() {
    return this._type
  }

  getValue() {
    return this._value
  }

  // 是否为变量
  isVariable() {
    return this._type === TokenType.VARIABLE
  }

  // 是否为值
  isScalar() {
    return (
      this._type === TokenType.INTEGER ||
      this._type === TokenType.FLOAT ||
      this._type === TokenType.BOOLEAN ||
      this._type === TokenType.STRING
    )
  }

  toString() {
    return `type ${this._type} value ${this._value}`
  }
}

export default Token
