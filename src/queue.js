import Node from './node'
'use strict'

export default class Queue {

  constructor() {
    this.oldestIndex = 0
    this.newestIndex = 0
    this.storage = []
  }

  front() { return this.oldestIndex}
  back () { return this.newestIndex}
  length() {return this.storage.length}

  enqueue(data) {
    let node = new Node(data)
    this.storage.push(node)
    this.newestIndex++
  }

  dequeue(data) {
    let node = new Node(data)
    this.storage.shift(node)
    this.oldestIndex ++
    if(this.storage.length === 0) {return null}
    else return this.storage[0]
  }

  isEmpty(){
    return this.storage.length === 0 ? true : false
  }
}
