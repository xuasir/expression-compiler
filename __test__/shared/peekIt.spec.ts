import { PeekIt } from '../../src/shared'
import { string2it } from '../utils'

describe(`test peek it`, () => {
  const end = 'endToken'
  let pi: InstanceType<typeof PeekIt>
  beforeEach(() => {
    pi = new PeekIt(string2it('12345'), end)
  })

  it(`next`, () => {
    expect(pi.next()).toBe('1')
    expect(pi.next()).toBe('2')
    expect(pi.next()).toBe('3')
    expect(pi.hasNext()).toBeTruthy()
    expect(pi.next()).toBe('4')
    expect(pi.next()).toBe('5')
    expect(pi.next()).toBe(end)
    expect(pi.hasNext()).toBeFalsy()
  })

  it(`peek and putback`, () => {
    expect(pi.next()).toBe('1')
    expect(pi.peek()).toBe('2')
    expect(pi.next()).toBe('2')

    // peek 2 step
    expect(pi.peek()).toBe('3')
    expect(pi.peek()).toBe('3')
    expect(pi.next()).toBe('3')

    // put back
    expect(pi.next()).toBe('4')
    pi.putBack()
    expect(pi.next()).toBe('4')
  })
})
