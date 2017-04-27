export default class Set{
  constructor(){this.values = []}

  add(newVal){this.values.push(newVal)}

  isEmpty(){return this.size() === 0? true : false}

  contains(existVal){
    for (var i = 0; i < this.values.length; i++) {
      this.values[i] === existVal
      return true
    }
    return false
  }
  remove(existVal){
    this.values.splice(this.values.indexOf(existVal), 1)
  }

  forEach(funk) {this.values = this.values.map(funk)}

  size(){return this.values.length}

  clone(){
    let returnSet = new Set()
    this.values.forEach( value => {
      returnSet.add(value)
    })
    return returnSet
  }

  isSubset(otherSet){
    for(let item of this.values) {
      if(!otherSet.values.includes(item)){
        return false
      }
    }
    return true
  }

  setUnion(otherSet) {return this.values.concat(otherSet.values)}

  intersect(otherSet) {
    let newArr = []
    for(let item of this.values) {
      if(otherSet.values.includes(item)){
        newArr.push(item)
      }
    }
    return newArr
    }

  difference(otherSet) {
    let newArr = []
    for(let item of this.values) {
      if(!otherSet.values.includes(item)){
        newArr.push(item)
      }
    }
    return newArr
  }

}
