import { isLetter, isLiteral, isNumber, isOperator } from '../../src/lexer/help'

describe(`test help `, () => {
  it(`reg help`, () => {
    expect(isLetter('a')).toBeTruthy()
    expect(isLiteral('_')).toBeTruthy()
    expect(isNumber('8')).toBeTruthy()
    expect(isOperator('%')).toBeTruthy()

    expect(isLetter('0')).toBeFalsy()
    expect(isLiteral('*')).toBeFalsy()
    expect(isNumber('a')).toBeFalsy()
    expect(isOperator('a')).toBeFalsy()
  })
})
