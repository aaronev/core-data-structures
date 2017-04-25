import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'
  it('exists', () => {
    expect(LinkedList).to.be.a('function')
  })
  context('getHeadNode()', () => {
    it('return the first node in the list', () => {
      const fruits = new LinkedList()
      fruits.insert("apple")
      expect(fruits.getHeadNode().getData()).to.deep.equal('apple')
    })
  })
  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const fruits = new LinkedList()
      fruits.insert("apple")
      fruits.insert("banana")
      expect(fruits.getTailNode().getData()).to.deep.equal('banana')
    })
  })
  context('contains()', () => {
    it('Determines whether or not the list contains the provided data', () => {
      const fruits = new LinkedList()
      fruits.insert("apple")
      fruits.insert("banana")
      expect(fruits.contains('apple')).to.equal(true)
      expect(fruits.contains('orange')).to.equal(false)
    })
  })
  context('find()', () => {
    it('Returns the first node containing the provided data, or -1 if not found', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      expect(fruits.find('orange')).to.equal(-1)
      expect(fruits.find('banana').getData()).to.equal('banana')
    })
  })
  context('insert()', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('orange')
      it('Inserts a node (with the provided data) to the tail of the list', () => {
      expect(fruits.getTailNode()).to.deep.equal({ data: "orange", previous: null, next: null})
    })
  })
  context('insertFirst()', () => {
    it('Inserts a node (with the provided data) to the head of the list', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      expect(fruits.insertFirst('orange'))
      expect(fruits.getHeadNode().getData()).to.equal('orange')
    })
  })
  // context('insertBefore()', () => {
  //   it('Inserts a node (with data "orange") before the first node containing "bananas"', () => {
  //     const fruits = new LinkedList()
  //     fruits.insert('apple')
  //     fruits.insert('banana')
  //     fruits.insertBefore('apple', 'orange')
  //     console.log(fruits)
  //     expect(fruits).to.deep.equal('apple', 'orange', 'banana')
  //   })
  // })
  // context('insertAfter()', () => {
  //   it('Inserts a node (with data "watermelon") after the node containing "banana"', () => {
  //     const apple = new Node({data: "apple"})
  //     const banana = new Node({data: "banana"})
  //     const orange = new Node({data: "orange"})
  //     const watermelon = new Node({data: "watermelon"})
  //     const fruits = new LinkedList(apple, banana, orange)
  //     expect(() => fruits.insertAfter(banana, watermelon))
  //       .to.alter(() => fruits.length(), { from: 3, to: 4 })
  //     expect(fruits.to.deep.equal(apple, banana, watermelon, orange))
  //   })
  // })
  // context('remove()', () => {
  //   it('Removes the tail node from the list', () => {
  //     const fruits = new LinkedList()
  //     fruits.insert('apple')
  //     fruits.insert('banana')
  //     //console.log(fruits.remove('banana'))
  //     expect(fruits.remove('apple')).to.equal('apple')
  //     //expect(fruits.remove('banana')).to.equal('apple')
  //   })
  // })
  // context('removeFirst()', () => {
  //   it('Removes the head node from the list', () => {
  //     const apple = new Node({data: "apple"})
  //     const banana = new Node({data: "banana"})
  //     const fruits = new LinkedList(apple, banana)
  //     expect(() => fruits.removeFirst().to.eqaul('apple'))
  //   })
  // })
  context('isEmpty()', () => {
    it('Determines if the list is empty or not', () => {
      const fruits = new LinkedList()
      expect(fruits.isEmpty()).to.equal(true)
      fruits.insert('apple')
      expect(fruits.isEmpty()).to.equal(false)
    })
  })
  context('size()', () => {
    it('Returns the size of the list (number of nodes)', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      expect(fruits.size()).to.equal(2)
    })
  })
  context('clear()', () => {
    it('Clears the list of all nodes/data', () => {
      const fruits = new LinkedList()
      fruits.insert('banana')
      fruits.insert('orange')
      fruits.clear()
      expect(fruits.size()).to.equal(0)
    })
  })
})

// linkedList.insertBefore("bananas", "apples") // Inserts a node (with data "apples") before the first node containing "bananas"
// linkedList.insertAfter("apples", "bananas")  // Inserts a node (with data "bananas") after the first node containing "apples"
// linkedList.remove()                // Removes the tail node from the list
// linkedList.removeFirst()           // Removes the head node from the list

