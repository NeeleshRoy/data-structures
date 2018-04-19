/**
* data-structures
*
* Copyright © 2018 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import { LinkedList } from '../src/LinkedList/LinkedList';

describe('LinkedList - Class and Methods', () => {
  describe('LinkedList.properties', () => {
    it('should have the head element', () => {
      const ll = new LinkedList('test');
      expect(ll).to.have.property('head');
      expect(typeof(ll.head)).to.eql('object');
      expect(ll.head).to.exist;
    });

    it('Should have the correct property values of the head node', () => {
      const ll = new LinkedList('test');
      expect(ll.head.element).to.eql('test');
      expect(ll.head.next).to.eql(null);
    });
  });
  describe('LinkedList.functions', () => {
    it('insert() - Should insert the element in the linked list', () => {
      const ll = new LinkedList('test');
      ll.insert('test2', 'test');
      expect(ll.head.next.element).to.eql('test2');
    });

    it('insert() - Should insert the  multiple elements in the linked list', () => {
      const ll = new LinkedList('test');
      ll.insert('test2', 'test');
      ll.insert('test3', 'test2');
      ll.insert('test4', 'test3');
      expect(ll.head.next.next.next.element).to.eql('test4');
    });

    it('delete() - Should delete the elements from the linked list', () => {
      const ll = new LinkedList('test');
      ll.insert('test2', 'test');
      ll.insert('test3', 'test2');
      ll.insert('test4', 'test3');
      ll.delete('test3');
      expect(ll.head.next.element).to.eql('test2');
      expect(ll.head.next.next.element).to.eql('test4');
    });

    it('delete() - Should not delete the elements from the linked list', () => {
      const ll = new LinkedList('test');
      ll.insert('test2', 'test');
      ll.insert('test3', 'test2');
      ll.insert('test4', 'test3');
      ll.delete('foo');
      expect(ll.head.next.element).to.eql('test2');
      expect(ll.head.next.next.element).to.eql('test3');
      expect(ll.head.next.next.next.element).to.eql('test4');
    });

    it('display() - Should display the elements in the linked list', () => {
      const ll = new LinkedList('test');
      ll.insert('test2', 'test');
      ll.insert('test3', 'test2');
      ll.insert('test4', 'test3');
      const out = ll.display();
      expect(out).to.eql(['test', 'test2', 'test3', 'test4']);
    });
  });
});
