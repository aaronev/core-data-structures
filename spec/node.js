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
      const nodeA = new Node({data: "apple"})
      expect(() => node.getData().to.eqaul('apple'))
    })
  })
  context('setNext()', () => {
    it('returns the data ("apple") of the node.', () => {
      const nodeA = new Node({data: "apple"})
      const nodeB = new Node({data: "banana"})
      expect(() => nodeA.setNext(nodeB).to.eqaul('apple', 'banana'))
    })
  })
  context('getNext()', () => {
    it('returns the data ("apple") of the node.', () => {
      const nodeA = new Node({data: "apple"})
      const nodeB = new Node({data: "banana"})
      expect(() => nodeA.setNext(nodeB).to.eqaul('apple', 'banana'))
    })
  })
})