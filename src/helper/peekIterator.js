const LinkedList = require('linkedlist')

const CACHE_SIZE = 10

export default class PeekIterator {
  constructor(it, endToken = null) {
    this.it = it
    // putback的元素-栈结构 离当前时间节点更久的节点 永远会push在距离栈顶更加接近的位置
    this.stackPutBacks = new LinkedList()

    // 基于时间窗口的缓存-队列结构 按时序 右边进左边出
    this.queueCache = new LinkedList()

    this.endToken = endToken
  }

  next() {
    let val = null

    // 存在putBacks的情况 需处理val
    if (this.stackPutBacks.length > 0) {
      // 从putback栈中取栈顶
      val = this.stackPutBacks.pop()
    } else {
      val = this.it.next().value
      if (val === undefined) {
        // 流结束
        const tmp = this.endToken
        this.endToken = null
        return tmp
      }
    }

    // 处理缓存
    while (this.queueCache.length > CACHE_SIZE - 1) {
      // 基于时间，元素从左边开始存入，距当前节点更久的节点在首部， 采用shift
      this.queueCache.shift()
    }
    // 将当前节点按时间顺序添加到尾部
    this.queueCache.push(val)
    return val
  }

  hasNext() {
    return !!this.peek()
  }

  peek() {
    if (this.stackPutBacks.length > 0) {
      return this.stackPutBacks.head
    }
    const val = this.next()
    this.putBack()
    return val
  }

  putBack() {
    if (this.queueCache.length > 0) {
      this.stackPutBacks.push(this.queueCache.pop())
    }
  }
}
