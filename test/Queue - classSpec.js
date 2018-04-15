/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Queue from '../src/Queue/Queue';

describe('Queue - Class and Methods', () => {
  
  describe('Queue.properties', () => {
    it('should have the datastore', () => {
      const queue = new Queue();
      expect(queue).to.have.property('datastore');
      expect(typeof(queue.datastore)).to.eql('object');
    });
  });
  
  describe('Queue.functions', () => {
    it('enqueue - should add elements to the queue properly', () => {
      const q = new Queue();
      q.enqueue(1);
      q.enqueue(2);

      expect(q.datastore).to.eql([1, 2]);
      expect(q.datastore.length).to.eql(2);
    });

    it('dequeue - should remove elements from the queue properly', () => {
      const q = new Queue();
      q.enqueue(1);
      q.enqueue(2);
      q.dequeue();

      expect(q.datastore).to.eql([2]);
      expect(q.datastore.length).to.eql(1);
    });

    it('front - should return the first element in the queue', () => {
      const q = new Queue([1,2,3]);
      const out = q.front();
      expect(out).to.eql(1);
    });

    it('back - should return the last element in the queue', () => {
      const q = new Queue([1,2,3]);
      const out = q.back();
      expect(out).to.eql(3);
    });

    it('toString - should return the string of elements in the queue', () => {
      const q = new Queue([1,2,3]);
      const out = q.toString();
      expect(out).to.eql([1, 2, 3]);
    });

    it('clear - should clear the elements in the queue', () => {
      const q = new Queue([1,2,3]);
      q.clear();
      expect(q.datastore).to.eql([]);
      expect(q.datastore.length).to.eql(0);
    });

    it('isEmpty - should return false', () => {
      const q = new Queue([1,2,3]);
      const out = q.isEmpty();
      expect(out).to.be.false;
    });

    it('isEmpty - should return true', () => {
      const q = new Queue([]);
      const out = q.isEmpty();
      expect(out).to.be.true;
    });
  });
});
