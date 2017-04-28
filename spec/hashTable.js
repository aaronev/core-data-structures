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
      expect(newTable.table.name).to.deep.equal(['Beyonce'])
    })
  })
  context('serafinTests()', () => {
    it('Does stuff', () => {
      const a = new HashTable()
      a.put('FavoriteSinger', 'Beyonce')
      console.log( 'label1:', a.get('FavoriteSinger') )
      a.iterate(function(response) {
        console.log('labelEntireObj1:', response)
      })
      a.put('FavoriteSinger', 'Updated-ShiaLabuff') // Should have "ADDED" another item to favoriteSinger because it already exists. contains doesn't work?
      console.log( 'label2:', a.get('FavoriteSinger') )
      a.remove('FavoriteSinger')
      a.iterate(console.log.bind(this, 'labelEntireObj2'))
    })
  })
})
