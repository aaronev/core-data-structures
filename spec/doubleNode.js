import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoubleNode from '../src/doubleNode'

chai.use(chaiChange)

describe('DoubleNode', () => {
  'use strict'
  it('exists', () => {
    expect(DoubleNode).to.be.a('function')
  })
  context('getData()', () => {
    it('returns the data ("apple") of the node.', () => {
      const nodeA = new DoubleNode("apple")
      expect(nodeA.getData()).to.equal('apple')
    })
  })
  context('setNext()', () => {
    it('changes the references to the next node and returns the original node.', () => {
      const nodeA = new DoubleNode("apple")
      const nodeB = new DoubleNode("banana")
      expect(nodeA.setNext(nodeB)).to.deep.equal(nodeA)
    })
  })
  context('getNext()', () => {
    it('returns the next node.', () => {
      const nodeA = new DoubleNode("apple")
      const nodeB = new DoubleNode("banana")
      nodeA.setNext(nodeB)
      expect(nodeA.getNext()).to.equal(nodeB)
    })
  })
  context('getPrevious()', () => {
    it('returns the previous node.', () => {
      const nodeA = new DoubleNode("apple")
      const nodeB = new DoubleNode("banana")
      nodeA.getPrevious()
      expect(nodeA.getPrevious()).to.equal(null)
    })
  })
  context('setPrevious()', () => {
    it('sets the previous node.', () => {
      const nodeA = new DoubleNode("apple")
      const nodeB = new DoubleNode("banana")
      nodeB.setPrevious(nodeA)
      expect(nodeB.getPrevious().data).to.equal('apple')
    })
  })
})
