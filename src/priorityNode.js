'use strict'

export default class PriorityNode {
  constructor(data, priority) {
    this.data = data
    this.priority = priority
    this.next = null
   }
  getData() {return this.data}
  getPriority() {return this.priority}
  getNext() {return this.next}
  setNext(newNext) {this.next = newNext; return this}
  setPriority(newPriority) {this.priority = newPriority}
}