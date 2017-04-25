import Node from './node'
'use strict'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length =  0
   }

  getHeadNode() { return this.head }
  getTailNode() { return this.tail }
  contains(item) { return this.find(item).data === item ? true : false}
  size() { return this.length }
  isEmpty() { return this.length === 0 ? true : false }
  clear() {return this.head = null, this.tail = null, this.length = 0}

  find(item) {
    let currentNode = this.head
    while (currentNode) {
      if(currentNode.getData() === item) {
        return currentNode
      } else { 
        currentNode = currentNode.next
      }
    }
    return -1
  }  
  insert(data) {
    let node = new Node( data )
    if (this.head === null) {
      this.head = node 
      this.tail = this.head
    } else if ( this.head === this.tail ){
      this.head.setNext( node )
      this.tail = node
    } else { 
      this.tail.setNext(node)
      this.tail = node
    }
    this.length++
  }
  insertFirst(data) {
    let node = new Node(data)
    if (this.head === null) {
      this.head = node 
      this.tail = this.head
    } else if ( this.head !== null ){
      node.setNext(this.head)
      this.head = node
    }
  }
  insertBefore(beforeNode, data) {
    this.insert(new Node(data)).setNext(this.find(beforeNode))
  }
}

// linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
// linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
// linkedList.remove()                // Removes the tail node from the list
// linkedList.removeFirst()           // Removes the head node from the list
