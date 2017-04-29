import Node from './doubleNode'
'use strict'

export default class DoublyLinkedList {
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
  findBackwards(item) {
    let currentNode = this.tail
    while (currentNode) {
      if(currentNode.getData() === item) {
        return currentNode
      } else {
        currentNode = currentNode.previous
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
      node.setPrevious(this.head)
      this.tail = node
    } else {
      node.setPrevious(this.tail)
      this.tail.setNext(node)
      this.tail = node
    }
    this.length++
  }
  insertFirst(data) {
    this.length++
    let node = new Node(data)
    if (this.head === null) {
      this.head = node
      this.tail = this.head
    } else if ( this.head !== null ){
      node.setNext(this.head)
      this.head = node
    }
  }
  insertBefore(bNode, data) {
    this.length++
    let beforeNode = new Node(bNode)
    let node = new Node(data)
    if (this.head.data === beforeNode.data) {
      this.head.previous = node
      node.next = this.head
      this.head = node
      return this
    } else {
      let currentNode = this.head
      while (currentNode) {
        if (currentNode.next.data === beforeNode.data) {
          currentNode.setNext(node)
          node.previous = currentNode
          node.setNext(beforeNode)
          return this
        } else {
          currentNode = currentNode.next
        }
      }
    }
  }
  insertAfter(nodeA, data) {
    this.length++
    let afterNode = new Node(nodeA)
    let node = new Node(data)
    if (this.head.data === afterNode.data) {
      node.next = this.head.next
      node.previous = this.head
      this.head.next = node
      node.next.previous = node
      return this
    } else {
      let currentNode = this.head
      while (currentNode) {
        if (currentNode.next.data === afterNode.data) {
          node.next = currentNode.next.next
          currentNode.next.next.previous = node
          node.previous = currentNode.next
          currentNode.next.next = node
        } else {
          currentNode = currentNode.next
        }
      }
    }
  }
  remove() {
    this.length--
    this.tail = this.tail.previous
  }
  removeFirst() {
    this.length--
    this.head = this.head.next
  }
}
