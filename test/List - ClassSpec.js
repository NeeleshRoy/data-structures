/**
 * data-structures
 *
 * Copyright © 2016 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import List from '../src/List/List';

describe('List - Class and Methods', () => {

  describe('List.properties', () => {
    it('should have the datastore, pos and listSize', () => {
      const list = new List();
      expect(list).to.have.property('datastore');
      expect(list).to.have.property('pos');
      expect(list).to.have.property('listSize');
      expect(typeof(list.datastore)).to.eql('object');
    });
  });

  describe('List.functions', () => {
    it('should return the correct length', () => {
      const list = new List([1, 2, 3], 0, 5);
      expect(list.listSize).to.eql(5);
    });

    it('should return the list data', () => {
      const list = new List([1, 2, 3], 0, 5);
      expect(list.toString()).to.eql([1, 2, 3]);
    });

    it('should add/append elements properly', () => {
      const list = new List();
      list.append(1);
      list.append(2);

      expect(list.datastore).to.eql([1, 2]);
      expect(list.length()).to.eql(2);
    });

    it('should add/append multiple variable types properly', () => {
      const list = new List();
      list.append(1);
      list.append(2.3);
      list.append('foo');

      expect(list.datastore).to.eql([1, 2.3, 'foo']);
      expect(list.length()).to.eql(3);
    });

    it('should delete/remove element from the list properly', () => {
      const list = new List([1, 2, 3]);
      list.remove(2);
      expect(list.toString()).to.eql([1, 3]);
      expect(list.length()).to.eql(2);
    });

    it('should not delete/remove any element from the list', () => {
      const list = new List([1, 2, 3]);
      const out = list.remove(5);
      expect(list.toString()).to.eql([1, 2, 3]);
      expect(list.length()).to.eql(3);
      expect(out).to.be.false;
    });

    it('should clear/reset all the values in the list', () => {
      const list = new List([1, 2, 3], 4, 7);
      list.clear();
      expect(list.toString()).to.eql([]);
      expect(list.length()).to.eql(0);
      expect(list.pos).to.eql(0);
    });

    it('Should insert the element in the proper place', () => {
      const list = new List([1, 2, 3, 4, 5], 4, 7);
      list.insert(5, 2);
      expect(list.datastore).to.eql([1, 2, 5, 3, 4, 5]);

      list.insert('hey', 6);
      expect(list.datastore).to.eql([1, 2, 5, 3, 4, 5]);
    });

    it('Should return true if the list contains the element', () => {
      const list = new List([1, 2, 3, 4, 5], 4, 7);
      const out1 = list.contains(2);
      expect(out1).to.be.true;
    });

    it('Should return false if the list doesn\'t contain the element', () => {
      const list = new List([1, 2, 3, 4, 5], 4, 7);
      const out1 = list.contains(9);
      expect(out1).to.be.false;
    });

    it('Should return the front element of the list', () => {
      const list = new List([1, 2, 3, 4, 5], 3, 5);
      list.front();
      const out = list.getElement();
      expect(out).to.eql(1);
    });

    it('Should return the last element of the list', () => {
      const list = new List([1, 2, 3, 4, 5], 3, 5);
      list.end();
      const out = list.getElement();
      expect(out).to.eql(5);
    });

    it('Should return the next element of the list', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      list.next();
      const out = list.getElement();
      expect(out).to.eql(4);
    });

    it('Should return the previous element of the list', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      list.prev();
      const out = list.getElement();
      expect(out).to.eql(2);
    });

    it('Should return the current element of the list', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      list.prev();
      list.next();
      list.next();
      const out = list.currPos();
      expect(out).to.eql(3);
    });

    it('Should move the element to the specified position in the list', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      list.moveTo(4);
      const out = list.getElement();
      expect(out).to.eql(5);
    });

    it('Should get the element of the current postition', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      const out = list.getElement();
      expect(out).to.eql(3);
    });

    it('Should get the element in the current postition after traversals', () => {
      const list = new List([1, 2, 3, 4, 5], 2, 5);
      list.next();
      list.next();
      list.prev();
      const out = list.getElement();
      expect(out).to.eql(4);
    });
  });
});
