'use strict'

export default class Node {
  construct(data) {
    this.data = data
    this.next = null
   }

  getData() {
    return this.data
   }

  setNext(newNext) { 
    this.next = newNext
    return this
    }
    
  getNext() {
    return this.next
  }
}
