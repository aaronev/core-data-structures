// import PriorityNode from './priorityNode'

// //this is just for fun, the array version, which we don't want to get credit for

// export default class PriorityQueue2 {
//   constructor() {this.storage = []}
//   enqueue(data, priority) {this.storage.push(new PriorityNode(data, priority))}
//   front() {return this.highest()} 
//   back() {return this.lowest()}
//   dequeue() {let prior = this.highest(), this.storage.splice(this.storage.indexOf(this.highest()), 1), return prior}        
//   isEmpty() {return this.length() === 0 ? true : false}
//   length() {return this.storage.length}

//   //additonal functions needed

//   highest(){return this.storage.map(index => {return Math.max(index.priority)})}
//   lowest() {return this.storage.map(index => {return Math.min(index.priority)})}
// }