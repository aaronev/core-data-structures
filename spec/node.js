import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Node from '../src/node'

chai.use(chaiChange)

describe('Node', () => {
  'use strict'
  it('exists', () => {
    expect(Node).to.be.a('function')
  })
  context('getData()', () => {
    it('returns the data ("apple") of the node.', () => {
      const nodeA = new Node("apple")
      expect(nodeA.getData()).to.equal('apple')
    })
  })
  context('setNext()', () => {
    it('changes the references to the next node and returns the original node.', () => {
      const nodeA = new Node("apple")
      const nodeB = new Node("banana")
      expect(nodeA.setNext(nodeB)).to.deep.equal(nodeA)
    })
  })
  context('getNext()', () => {
    it('returns the next node.', () => {
      const nodeA = new Node("apple")
      const nodeB = new Node("banana")
      nodeA.setNext(nodeB)
      expect(nodeA.getNext()).to.equal(nodeB)
    })
  })
})
