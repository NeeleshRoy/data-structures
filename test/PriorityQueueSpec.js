/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import PriorityQueue from '../src/Queue/priorityQueue';

describe('Priority Queue - Class and Methods', () => {
  describe('Priority Queue.properties', () => {
    it('should have the datastore', () => {
      const pqueue = new PriorityQueue();
      expect(pqueue).to.have.property('datastore');
      expect(typeof(pqueue.datastore)).to.eql('object');
    });
  });
  describe('Priority Queue.functions', () => {
    it('enqueue() Should add the element in the queue correctly', () => {
      const pqueue = new PriorityQueue();
      pqueue.enqueue("Neelesh", 1);
      expect(pqueue.datastore).to.eql([{ value: "Neelesh", priority: 1 }]); 
    });

    it('enqueue() Should add the element in the queue correctly', () => {
      const pqueue = new PriorityQueue();
      pqueue.enqueue("Neelesh", 1);
      pqueue.enqueue("diya", 4);
      expect(pqueue.datastore).to.eql([{ value: "Neelesh", priority: 1 }, { value: "diya", priority: 4 }]); 
    });

    it('dequeue() Should delete the element in the queue correctly', () => {
      const pqueue = new PriorityQueue();
      pqueue.enqueue("Neelesh", 2);
      pqueue.enqueue("diya", 3);
      pqueue.enqueue("rash", 1);
      pqueue.dequeue();
      expect(pqueue.datastore).to.eql([{ value: "Neelesh", priority: 2 }, { value: "diya", priority: 3 }]); 
    });

    it('toString() Should return the datastore', () => {
      const pqueue = new PriorityQueue();
      pqueue.enqueue("Neelesh", 2);
      pqueue.enqueue("diya", 3);
      const out = pqueue.toString();
      expect(out).to.eql([{ value: "Neelesh", priority: 2 }, { value: "diya", priority: 3 }]); 
    });
  });
});
