import Node from './node'
'use strict'

export default class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.size = 0
  }

  push(data) {
    let node = new Node(data)
    if (this.top !== null) {
      node.setNext(this.top)
      this.top = node
    }
    else { this.top = node }
    this.size ++
    return this.top
  }

  pop(data) {
  let node = new Node(data)
  if (this.top !== null) {
    this.top = this.top.next
  }
  this.size --
  return this.top
  }

  peek(){return this.top}

  isEmpty() { return this.size === 0 ? true : false }

  length() { return this.size  }

  }
