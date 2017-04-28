import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('LinkedList', () => {
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
      expect(fruits.getTailNode()).to.deep.equal({ data: "orange", next: null})
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
  context('insertBefore()', () => {
    it('Inserts a node (with data "orange") before the first node containing "bananas"', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      fruits.insertBefore('apple', 'pear')
      expect(fruits.head.data).to.equal('pear')
      fruits.insertBefore('banana', 'orange')
      expect(fruits.head.next.next.data).to.equal('orange')
    })
  })
  context('insertAfter()', () => {
    it('Inserts a node (with data "watermelon") after the node containing "banana"', () => {
      const fruits = new LinkedList()
      fruits.insert('banana')
      fruits.insert('apple')
      fruits.insert('avocado')
      fruits.insertAfter('banana', 'watermelon')
      expect(fruits.head.next.data).to.equal('watermelon')
    })
  })
  context('remove()', () => {
    it('Removes the tail node from the list', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      fruits.insert('avocado')
      expect(fruits.tail.data).to.equal('avocado')
      fruits.remove()
      expect(fruits.tail.data).to.equal('banana')
    })
  })
  context('removeFirst()', () => {
    it('Removes the head node from the list', () => {
      const fruits = new LinkedList()
      fruits.insert('apple')
      fruits.insert('banana')
      fruits.insert('avocado')
      expect(fruits.head.data).to.equal('apple')
      fruits.removeFirst()
      expect(fruits.head.data).to.equal('banana')
    })
  })
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
