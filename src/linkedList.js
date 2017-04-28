// import Node from './node'
// 'use strict'

// export default class LinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length =  0
//    }
//   getHeadNode() { return this.head }
//   getTailNode() { return this.tail }
//   contains(item) { return this.find(item).data === item ? true : false}
//   size() { return this.length }
//   isEmpty() { return this.length === 0 ? true : false }
//   clear() {return this.head = null, this.tail = null, this.length = 0}
//   find(item) {
//     let currentNode = this.head
//     while (currentNode) {
//       if(currentNode.getData() === item) {
//         return currentNode
//       } else { 
//         currentNode = currentNode.next
//       }
//     }
//     return -1
//   }  
//   insert(data) {
//     let node = new Node( data )
//     if (this.head === null) {
//       this.head = node 
//       this.tail = this.head
//     } else if ( this.head === this.tail ){
//       this.head.setNext( node )
//       node.setPrev(this.head)
//       this.tail = node
//     } else { 
//       this.tail.setNext(node)
//       node.setPrev(this.tail)
//       this.tail = node
//     }
//     this.length++
//   }
//   insertFirst(data) {
//     let node = new Node(data)
//     if (this.head === null) {
//       this.head = node 
//       this.tail = this.head
//     } else if ( this.head !== null ){
//       this.head.setPrev(node)
//       node.setNext(this.head)
//       this.head = node
//     }
//   }
//   insertBefore(beforeNode, data) {
//     let node = new Node(data)
//     let before = this.find(beforeNode)
//     if (this.head = before) {
//       before.setPrev(node)
//       node.setNext(before)
//       this.head = node
//     } else if (this.tail = before) {
//       node.setPrev(before.previous)
//       node.next(before)
//     } else {
//       node.setPrev(before.previous)
//       node.setNext(before)
//     }
//   }
// }


// // linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
// // linkedList.remove()                // Removes the tail node from the list
// // linkedList.removeFirst()           // Removes the head node from the list
