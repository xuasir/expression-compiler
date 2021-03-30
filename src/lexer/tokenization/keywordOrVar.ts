import type { ITokenization } from './types'
import { Token, TokenType } from '../token'

export const makeKewordOrVar: ITokenization = {
  handler: () => {
    return new Token(TokenType.VARIABLE, 'var')
  },
  isEntryChart: () => true
}
