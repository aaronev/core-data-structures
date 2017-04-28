import sha256 from 'sha256'
import LinkedList from "./linkedList"
export default class HashTable {

  constructor(){
    this.table = {}
  }

  put(aKey, value) {
    const hashKey = sha256(aKey)
    console.log('before', value)
    console.log(this.contains(hashKey))
    if (this.contains(hashKey)) {
      console.log('exist', value)
      console.log(this.table)
      this.table[hashKey].insert(value)
      return this
    } else {
      console.log('doesnt exist', value)
      console.log(this.table)
      this.table[hashKey] = new LinkedList().insert(value)
      return this
    }
  }

  get(key) {return this.table[this.hash(key)]}

  contains(key) {return this.table[sha256(key)] ? true : false}

  remove(key){return this.table[this.hash(key)] = null}

  size(){return this.table.length}

  hash(key){
    return sha256(key)
  }
  iterate(func) {
    // let keys = Object(this.table)
    // for (var i = 0; i < keys.length(); i++) {
    //   return this.table[i].map(func)
    // }
    for(let key in this.table) {
      func({key: key, value: this.table[key]})
    }
  }
}
