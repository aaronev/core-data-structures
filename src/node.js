'use strict'

export default class Node {
  constructor(data) {
    this.data = data
    this.previous = null
    this.next = null
   }

  getData() {
    return this.data
   }

  setNext(newNext) { 
    this.next = newNext
    return [this.data, this.next.data]
    }
    
  getNext() {
    return this.next
  }
}
