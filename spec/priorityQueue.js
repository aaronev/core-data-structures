import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('priorityQueue', () => {
  'use strict'
  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      expect(pQueue.highest.data).to.equal('pizza')
    })
  })

  context('dequeue()', () => {
    it('adds an element with priority (number) to the back of the queue.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      pQueue.dequeue()
      expect(pQueue.highest.data).to.equal('salad')
    })
  })

  context('front()', () => {
    it('returns the front element (highest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.isEmpty()).to.equal(true)
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      expect(pQueue.front().data).to.equal('pizza')
    })
  })
  context('back()', () => {
    it('returns the back element (lowest priority) in the queue or null if the queue is empty.', () => {
      const pQueue = new PriorityQueue()
      expect(pQueue.isEmpty()).to.equal(true)
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      expect(pQueue.back().data).to.equal('toast')
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const pQueue = new PriorityQueue()
      console.log(pQueue.isEmpty())
      expect(pQueue.isEmpty()).to.equal(true)
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      console.log(pQueue.size)
      console.log(pQueue.isEmpty())
      expect(pQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const pQueue = new PriorityQueue()
      pQueue.enqueue('salad', 90)
      pQueue.enqueue('pizza', 100)
      pQueue.enqueue('toast', 80)
      expect(pQueue.length()).to.equal(3)
    })
  })
})
