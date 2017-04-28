import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', () => {
  'use strict'

  it('exists', () => {
    expect(Stack).to.be.a('function')
  })
  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()
      expect(myStack.push('foo')).to.equal(myStack.top)
    })
  })
  context('pop()', () => {
    it('returns and removes the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('fi')
      myStack.push('foo');
      expect(myStack.pop('foo')).to.equal(myStack.top)
    })
  })
  context('peek()', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      myStack.push('fi')
      myStack.push('foo');
      expect(myStack.peek()).to.equal(myStack.top)
    })
  })
  context('isEmpty()', () => {
    it('returns the top element in the stack or null if the stack is empty.', () => {
      const myStack = new Stack()
      expect(myStack.isEmpty()).to.equal(true)
      myStack.push('fi')
      myStack.push('foo');
      expect(myStack.isEmpty()).to.equal(false)
    })
  })
  context('length()', () => {
    it('returns the number of elements in the stack.', () => {
      const myStack = new Stack()
      expect(myStack.length()).to.equal(0)
      myStack.push('fi')
      myStack.push('foo');
      expect(myStack.length()).to.equal(2)
    })
  })
})