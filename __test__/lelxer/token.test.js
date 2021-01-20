import TokenType from '../../src/lexer/tokenType'
import Token from '../../src/lexer/token'

test('test token class', () => {
  const keywordToken = new Token(TokenType.KEYWORD, 'var')
  expect(keywordToken.isVariable()).toEqual(false)
  expect(keywordToken.isScalar()).toEqual(false)
  expect(keywordToken.getType()).toBe(TokenType.KEYWORD)
  expect(keywordToken.getValue()).toBe('var')
})
