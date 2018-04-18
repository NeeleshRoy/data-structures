/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Deque from '../src/Queue/Deque';

describe('Deque - Class and Methods', () => {
  describe('Deque.properties', () => {
    it('should have the datastore', () => {
      const queue = new Deque();
      expect(queue).to.have.property('datastore');
      expect(typeof(queue.datastore)).to.eql('object');
      expect(queue.datastore).to.exist;
    });
  });
  describe('Deque.functions', () => {
    it('enqueue_front() - should add elements to the front of the queue properly', () => {
      const q = new Deque([1, 2]);
      q.enqueue_front(3);
      
      expect(q.datastore).to.eql([3, 1, 2]);
      expect(q.datastore.length).to.eql(3);
    });
    
    it('enqueue_front() - should add elements to the back of the queue properly', () => {
      const q = new Deque([1, 2]);
      q.enqueue_back(3);
      
      expect(q.datastore).to.eql([1, 2, 3]);
      expect(q.datastore.length).to.eql(3);
    });
    
    it('dequeue_front() - should remove elements from the front of the queue properly', () => {
      const q = new Deque([1, 2, 3]);
      q.dequeue_front();
      
      expect(q.datastore).to.eql([2, 3]);
      expect(q.datastore.length).to.eql(2);
    });
    
    it('dequeue_back() - should remove elements from the back of the queue properly', () => {
      const q = new Deque([1, 2, 3]);
      q.dequeue_back();
      
      expect(q.datastore).to.eql([1, 2]);
      expect(q.datastore.length).to.eql(2);
    });
    
    it('toString - should return the string of elements in the queue', () => {
      const q = new Deque([1, 2, 3]);
      const out = q.toString();
      expect(out).to.eql([1, 2, 3]);
    });
    
    it('clear - should clear the elements in the queue', () => {
      const q = new Deque([1, 2, 3]);
      q.clear();
      expect(q.datastore).to.eql([]);
      expect(q.datastore.length).to.eql(0);
    });
    
    it('isEmpty - should return false', () => {
      const q = new Deque([1, 2, 3]);
      const out = q.isEmpty();
      expect(out).to.be.false;
    });
    
    it('isEmpty - should return true', () => {
      const q = new Deque([]);
      const out = q.isEmpty();
      expect(out).to.be.true;
    });
  });
});
