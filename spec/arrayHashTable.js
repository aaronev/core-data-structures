// import chai, { expect } from 'chai'
// import chaiChange from 'chai-change'
// import HashTable from '../src/arrayHashTable'

// chai.use(chaiChange)

// describe('HashTable', () => {
//   'use strict'
//   it('exists', () => {
//     expect(HashTable).to.be.a('function')
//   })
//   context('put()', () => {
//     it('interts new key and value pair to hashtable', () => {
//       const hTableA = new HashTable()
//       hTableA.put('newkey', 'newValue')
//       hTableA.put('newkey', 'AnewValue')
//       expect(hTableA.get('newkey')).to.deep.equal(['newValue', 'AnewValue'])
//     })
//   })
//   context('get()', () => {
//     it('returns the value or values of a given key', () => {
//       const hTableA = new HashTable()
//       hTableA.put('hello', 'myNinja')
//       expect(hTableA.get('hello')).to.deep.equal(['myNinja'])
//     })
//   })
//   context('contains()', () => {
//     it('returns true or false if table contains the given key', () => {
//       const hTableA = new HashTable()
//       hTableA.put('hello', 'myNinja')
//       expect(hTableA.contains('hello')).to.equal(true)
//       expect(hTableA.contains('hell')).to.equal(false)
//     })
//   })
//   context('remove()', () => {
//     it('removes the given key from the table', () => {
//       const hTableA = new HashTable()
//       hTableA.put('hello', 'myNinja')
//       expect(hTableA.contains('hello')).to.equal(true)
//       hTableA.remove('hello')
//       expect(hTableA.contains('hello')).to.equal(false)
//     })
//   })
//   context('size()', () => {
//     it('returns the size of the table', () => {
//       const hTableA = new HashTable()
//       hTableA.put('hello', 'myNinja')
//       hTableA.put('newkey', 'newValue')
//       expect(hTableA.size()).to.equal(2)
//     })
//   })
//   context('hash()', () => {
//     it('returns the hash of a given key name', () => {
//       const hTableA = new HashTable()
//       const answer = '82a3537ff0dbce7eec35d69edc3a189ee6f17d82f353a553f9aa96cb0be3ce89'
//       expect(hTableA.hash('name')).to.equal(answer)
//     })
//   })
//   //failing test
//   // context('iterate()', () => {
//   //   it('it does the function for all the values of every key', () => {
//   //     const hTableA = new HashTable()
//   //     hTableA.put('hello', 1)
//   //     hTableA.put('newkey', 2)
//   //     hTableA.iterate(x=>{return x + 1})
//   //     expect(hTableA.get('hello')).to.equal(2)
//   //   })
//   // })
// })
