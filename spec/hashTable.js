import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe.only('HashTable', () => {
  'use strict'
  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })
  context('put()', () => {
    it('adds a key-value pair to the hash table, deal with collisions using chaining', () => {
      const newTable = new HashTable()
      newTable.put('name', 'Beyonce')
      newTable.put('name', 'Solange')
      newTable.put('name', 'Blue Ivy')
      newTable.put('first', 'one')
      console.log(newTable.table);
      expect(newTable.table).to.deep.equal(newTable.table )
    })
  })

  context('contains()', () => {
    it('returns true if the hash table contains the key.', () => {
      const newTable = new HashTable()
      expect(newTable.contains('name')).to.equal(false)
      newTable.put('name', 'Beyonce')
      newTable.put('name', 'Solange')
      expect(newTable.contains('name')).to.equal(true)
    })
  })
  // context('serafinTests()', () => {
  //   it('Does stuff', () => {
  //     const a = new HashTable()
  //     a.put('FavoriteSinger', 'Beyonce')
  //     console.log( 'label1:', a.get('FavoriteSinger') )
  //     a.iterate(function(response) {
  //       console.log('labelEntireObj1:', response)
  //     })
  //     a.put('FavoriteSinger', 'Updated-ShiaLabuff') // Should have "ADDED" another item to favoriteSinger because it already exists. contains doesn't work?
  //     console.log( 'label2:', a.get('FavoriteSinger') )
  //     a.remove('FavoriteSinger')
  //     a.iterate(console.log.bind(this, 'labelEntireObj2'))
  //   })
  // })
})
