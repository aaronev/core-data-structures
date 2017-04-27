import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityNode from '../src/priorityNode'
chai.use(chaiChange)

describe('priorityNode', () => {
  'use strict'
  it('exists', () => {
    expect(PriorityNode).to.be.a('function')
  })
    context('getData()', () => {
      it('returns the data ("apple") of the node.', () => {
        const nodeA = new PriorityNode("apple")
        expect(nodeA.getData()).to.equal('apple')
      })
    })
    context('setNext()', () => {
      it('changes the references to the next node and returns the original node.', () => {
        const nodeA = new PriorityNode("apple", 100)
        const nodeB = new PriorityNode("banana", 90)
        expect(nodeA.setNext(nodeB)).to.deep.equal(nodeA)
      })
    })
    context('getNext()', () => {
      it('returns the next node.', () => {
        const nodeA = new PriorityNode("apple", 100)
        const nodeB = new PriorityNode("banana", 90)
        nodeA.setNext(nodeB)
        expect(nodeA.getNext()).to.equal(nodeB)
      })
    })
    context('getPriority()', () => {
      it('returns the node priority', () => {
        const nodeA = new PriorityNode("apple", 100)
        const nodeB = new PriorityNode("banana", 90)
        nodeA.getPriority()
        expect(nodeA.getPriority()).to.equal(100)
      })
    })
    context('setPriority()', () => {
      it('changes the nodes priority and returns the node', () => {
        const nodeA = new PriorityNode("apple", 100)
        const nodeB = new PriorityNode("banana", 90)
        nodeA.setPriority(101)
        expect(nodeA.getPriority()).to.equal(101)
      })
    })
  })
