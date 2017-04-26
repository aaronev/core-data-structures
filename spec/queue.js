import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element (the string "foo") to the back of the queue.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('fi')
      expect(() => myQueue.enqueue('foo')).to.alter(() => myQueue.newestIndex, {from:1, to:2})
    })
  })

  context('dequeue()', () => {
    it('returns and removes the front element in the queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      expect(myQueue.dequeue()).to.equal(null)
      myQueue.enqueue('fi')
      myQueue.enqueue('foo')
      expect(myQueue.dequeue('fi')).to.equal(myQueue.storage[0])
    })
  })

  context('front()', () => {
    it('returns the front element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('fi')
      myQueue.enqueue('foo')
      myQueue.enqueue('fail')
      expect(myQueue.front()).to.equal(myQueue.oldestIndex)
    })
  })

  context('back()', () => {
    it('returns the back element in queue or null if the queue is empty.', () => {
      const myQueue = new Queue()
      myQueue.enqueue('fi')
      myQueue.enqueue('foo')
      myQueue.enqueue('fail')
      expect(myQueue.back()).to.equal(myQueue.newestIndex)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the queue is empty or false if not.', () => {
      const myQueue = new Queue()
      expect(myQueue.isEmpty()).to.equal(true)
      myQueue.enqueue('fi')
      myQueue.enqueue('foo')
      myQueue.enqueue('fail')
      expect(myQueue.isEmpty()).to.equal(false)
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue.', () => {
      const myQueue = new Queue()
      expect(myQueue.length()).to.equal(0)
      myQueue.enqueue('fi')
      myQueue.enqueue('foo')
      myQueue.enqueue('fail')
      expect(myQueue.length()).to.equal(3)
    })
  })
})
