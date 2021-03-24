import { Token, TokenType } from '../../src/shared'

describe(`test token `, () => {
  it(`basic method`, () => {
    const t1 = new Token(TokenType.KEYWORD, 'func')
    const t2 = new Token(TokenType.BOOLEAN, 'false')

    expect(t1.isVariable()).toBeFalsy()
    expect(t1.isScaler()).toBeFalsy()
    expect(t1.type).toBe(TokenType.KEYWORD)
    expect(t1.value).toBe('func')

    expect(t2.isVariable()).toBeFalsy()
    expect(t2.isScaler()).toBeTruthy()
    expect(t2.type).toBe(TokenType.BOOLEAN)
    expect(t2.value).toBe('false')

    expect(t2.isType()).toBeFalsy()
    expect(t2.toString()).toBe(`type: BOOLEAN, value: false`)
  })
})
