import type { IToken } from '../token'
import type { IPeekIt } from '../../shared'

type ITokenizationFn = (it: IPeekIt) => IToken

type IEntryChart = (c: string) => boolean

export interface ITokenization {
  handler: ITokenizationFn
  isEntryChart: IEntryChart
}
