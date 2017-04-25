export default class Node {
  constructor(data) {
    this.data = data
    this.previous = null
    this.next = null
   }
<<<<<<< HEAD

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
=======
  setNext(newNext) {this.next = newNext}
  setPrev(lastNode) {this.previous = lastNode}
  getData() {return this.data}
  getNext() {return this.next}
  getPrev() {return this.previous}
>>>>>>> node
}
