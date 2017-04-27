import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('set', () => {
  'use strict'
  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const setA = new Set()
      setA.add('warriors')
      setA.add('giants')
      setA.add('raiders')
      expect(setA.size()).to.equal(3)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the set is empty or false if not.', () => {
      const setA = new Set()
      expect(setA.isEmpty()).to.equal(true)
      setA.add('warriors')
      expect(setA.isEmpty()).to.equal(false)
    })
  })

  context('contains()', () => {
    it('returns true the set contains the element or false if not.', () => {
      const setA = new Set()
      setA.add('warriors')
      setA.add('giants')
      expect(setA.contains('giants')).to.equal(true)
    })
  })
  context('remove()', () => {
    it('removes an element (if it exists) from the set.', () => {
      const setA = new Set()
      setA.add('warriors')
      setA.add('giants')
      setA.remove('warriors')
      expect(setA.size()).to.equal(1)
    })
  })
  context('forEach()', () => {
    it('takes a callback functiom and passes to each element in sequence', () => {
      const setA = new Set()
      setA.add(1)
      setA.add(2)
      setA.forEach(x => {return x + 1})
      expect(setA.values).to.deep.equal([2, 3])
    })
  })
  context('size()', () => {
    it('returns the number of elements in the set.', () => {
      const setA = new Set()
      setA.add('warriors')
      setA.add('giants')
      setA.add('raiders')
      expect(setA.size()).to.deep.equal(3)
    })
  })

  context('clone()', () => {
    it('returns a cloned set.', () => {
      const setA = new Set()
      setA.add('warriors')
      setA.add('giants')
      setA.add('raiders')
      let setB = setA.clone()
      expect(setA.values).to.deep.equal(setB.values)
    })
  })

  context('isSubset()', () => {
    it('returns true if the set is a subset of otherSet or false if not.', () => {
      const setA = new Set()
      const setB = new Set()
      setA.add('warriors')
      setA.add('giants')
      setB.add('raiders')
      expect(setA.isSubset(setB)).to.equal(false)
      setB.add('warriors')
      setB.add('bulls');
      setB.add('giants')
      expect(setA.isSubset(setB)).to.equal(true)
    })
  })

  context('setUntion()', () => {
    it('unions the set with another set and returns the resulting set', () => {
      const setA = new Set()
      const setB = new Set()
      setA.add(1)
      setA.add(2)
      setB.add(1)
      expect(setA.setUnion(setB)).to.deep.equal([1, 2, 1])
    })
  })
  context('intersect()', () => {
    it('intersects the set with another set and returns the resulting set', () => {
      const setA = new Set()
      const setB = new Set()
      setA.add(1)
      setA.add(2)
      setA.add(4)
      setB.add(1)
      setB.add(3)
      setB.add(4)
      expect(setA.intersect(setB)).to.deep.equal([1, 4])
    })
  })

  context('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet.', () => {
      const setA = new Set()
      const setB = new Set()
      setA.add(5)
      setA.add(2)
      setA.add(4)
      setB.add(1)
      setB.add(3)
      setB.add(4)
      expect(setA.difference(setB)).to.deep.equal([5, 2])
    })
  })
})
