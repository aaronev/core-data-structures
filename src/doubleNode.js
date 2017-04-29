'use strict'

export default class DoubleNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.previous = null
   }
  getData() {return this.data}
  setNext(newNext) {this.next = newNext; return this}
  getNext() {return this.next}
  getPrevious(){return this.previous}
  setPrevious(node){this.previous = node; return this}
}
