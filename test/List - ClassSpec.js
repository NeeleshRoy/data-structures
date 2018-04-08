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

    it('should clear/reset all the values in the list', () => {
      const list = new List([1, 2, 3], 4, 7);
      list.clear();
      expect(list.toString()).to.eql([]);
      expect(list.length()).to.eql(0);
      expect(list.pos).to.eql(0);
    });
  });
});
