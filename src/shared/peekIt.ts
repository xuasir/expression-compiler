import { LinkedList, CompareFn, Compare } from '@xus/data-structures'

const compareString: CompareFn<string> = (l, r) => {
  // linkedlist compare just need string Equal
  if (l === r) return Compare.EQUAL
  return Compare.SMALL
}

const CACHE_SIZE = 10

/**
 * 4 --> 3 --> 2 --> 1
 * time cache move to right
 * stream move to left
 */
export class PeekIt {
  private timeCache
  private putbackStack
  constructor(private it: Iterator<string, void>, private end: string = '') {
    this.timeCache = new LinkedList<string>(compareString)
    this.putbackStack = new LinkedList<string>(compareString)
  }

  hasNext() {
    return !!this.end || !!this.peek()
  }

  next() {
    let val: string
    if (this.putbackStack.size() > 0) {
      val = this.putbackStack.deleteIndex(0)!
    } else {
      const next = this.it.next()
      if (next.done) {
        const endToken = this.end
        this.end = ''
        val = endToken
      } else {
        val = next.value
      }
    }
    while (this.timeCache.size() > CACHE_SIZE - 1) {
      this.timeCache.deleteIndex(0)
    }
    this.timeCache.addLast(val)
    return val
  }

  peek() {
    // optional
    if (this.putbackStack.size() > 0) {
      const val = this.putbackStack.deleteIndex(0)!
      this.putbackStack.addFirst(val)
      return val
    }

    const val = this.next()
    this.putBack()
    return val
  }

  putBack() {
    if (this.timeCache.size() > 0) {
      this.putbackStack.addFirst(
        this.timeCache.deleteIndex(this.timeCache.size() - 1)!
      )
    }
  }
}

export type IPeekIt = InstanceType<typeof PeekIt>
