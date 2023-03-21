export class Queue<Type> {
  items: Array<Type>
  headIndex: number
  tailIndex: number

  constructor() {
    this.items = []
    this.headIndex = 0
    this.tailIndex = 0
  }

  enqueue(item: Type) {
    this.items[this.tailIndex] = item
    this.tailIndex++
    console.log(this.tailIndex, this.length(), this.headIndex)
  }

  dequeue() {
    const item = this.items[this.headIndex]
    delete this.items[this.headIndex]
    this.headIndex++
    return item
  }

  peek() {
    return this.items[this.headIndex]
  }

  length() {
    return this.tailIndex - this.headIndex
  }

}
