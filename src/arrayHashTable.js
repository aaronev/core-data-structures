//HashTable without the has, just for fun as well
//For practice reasons
import sha256 from 'sha256'

export default class HashTable {
  constructor(){this.table = {}}
  get(key) {return this.table[key]}
  contains(key) {return this.table[key] ? true : false}
  remove(key) {return this.table[key] = null}
  size() {return Object.keys(this.table).length}
  hash(key) {return sha256(key)}
  iterate(func) {
    let keys = Object.keys(this.table)
    for (var i = 0; i < keys.length; i++) {
      return this.table.keys[i].map(func)
    }
  }
  put(key, value) {
    return this.contains(key)
      ?this.table[key].push(value)
      :this.table[key] = [value]
  }
  put(aKey, value) {
    const hashKey = sha256(aKey)
    if (this.contains(hashKey)) {
      this.table[hashKey].insert(value)
      return this
    } else {
      this.table[hashKey] = new LinkedList().insert(value)
      return this
    }
  }
}
