import PriorityNode from './priorityNode'
'use strict'

export default class PriorityQueue {
  constructor() {
    this.highest = null
    this.lowest = null
    this.size = 0
  }
  isEmpty() {return this.length() === 0 ? true : false}
  length() {return this.size}
  front() {return this.highest}
  back() {return this.lowest}
  enqueue(data, priority) {
    let newPNode = new PriorityNode(data, priority)
     this.size++
    if(this.highest === null) {
      this.highest = newPNode
      this.lowest = newPNode
      return newPNode
    }
    else if(newPNode.priority >= this.highest.priority) {
      newPNode.setNext(this.highest)
      this.highest = newPNode
      return this
    } else {
      let currentNode = this.highest
      while (currentNode) {
        if (currentNode.priority >= newPNode.priority) {
          if (currentNode.next === null) {
            currentNode.setNext(newPNode)
            this.lowest = newPNode
            return this 
          }
          else if (currentNode.next.priority <= newPNode.priority) {
            newPNode.setNext(currentNode.getNext())
            currentNode.setNext(newPNode)
            return this
          }
        }
        currentNode = currentNode.getNext()
      }
    }
  }
  dequeue() {
    if(this.highest) {
      const dataToReturn = this.highest.getData()
      this.highest = this.highest.getNext()
      return dataToReturn
    } else {
      return null
    }
  }
}