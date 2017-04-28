// import PriorityNode from './priorityNode'

// export default class PriorityQueue {
//   constructor() {
//     this.highest = null
//     this.lowest = null
//     this.size = 0
//   }
//   front() {return this.highest} 
//   back() {return this.lowest}
//   isEmpty() {return this.size === 0 ? true : false}
//   length() {return this.size} 
//   dequeue() {let oldNode = this.highest; this.highest = this.highest.next; return oldNode} 
//   enqueue(data, priority) {
//     let newPNode = new PriorityNode(data, priority)
//     this.size++
//     if (this.highest === null) {
//       this.highest = newPNode
//       this.lowest = newPnode
//       break
//     } else {
//       let currentNode = this.highest
//       while (currentNode) {
//         if (currentNode.priority >= newPNode.priority) {
//           if (currentNode.next === null) {
//             currentNode.setNext(newPNode)
//             this.lowest = newPNode
//             break
//           } else if(currentNode.next.priority <= newPNode.priorty) {
//             currentNode.setNext(newPNode)
//             newPnode.setNext(curreNode.next)
//             break
//           } else {currentNode = currentNode.next}

//         } else { 
//           newPNode.setNext(this.highest)
//           this.highest = newPNode
//           break
//         }
//       }
//     } 
//   }        
// }