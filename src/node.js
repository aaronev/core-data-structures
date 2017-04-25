export default class Node {
  construct(data) {
    this.data = data
    this.previous = null
    this.next = null
   }
  setNext(newNext) {this.next = newNext}
  setPrev(lastNode) {this.previous = lastNode}
  getData() {return this.data}
  getNext() {return this.next}
  getPrev() {return this.previous}
}
