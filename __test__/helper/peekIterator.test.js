import { arraryToGenerator } from '../utils/index'
import PeekIterator from '../../src/helper/peekIterator'

describe('test peekIterator', () => {
  let it = null
  beforeEach(() => {
    const str = '1234567'
    it = new PeekIterator(arraryToGenerator([...str]), '/0')
  })
  test('test peek ', () => {
    expect(it.peek()).toBe('1')
    expect(it.next()).toBe('1')
    expect(it.peek()).toBe('2')
    expect(it.peek()).toBe('2')
  })

  test('test putBack ', () => {
    expect(it.next()).toBe('1')
    expect(it.next()).toBe('2')
    expect(it.next()).toBe('3')
    it.putBack()
    it.putBack()
    expect(it.next()).toBe('2')
    expect(it.next()).toBe('3')
  })

  test('test hasNext', () => {
    expect(it.hasNext()).toBeTruthy()
    Array.from({ length: 8 }).map(() => it.next())
    expect(it.hasNext()).toBeFalsy()
  })

  test('test endToken', () => {
    Array.from({ length: 7 }).map(() => it.next())
    expect(it.next()).toBe('/0')
  })
})
