/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Set from '../src/sets';

describe('Set - Class and Methods', () => {
  describe('Set.properties', () => {
    it('should have the datastore', () => {
      const set = new Set();
      expect(set).to.have.property('dataStore');
      expect(typeof(set.dataStore)).to.eql('object');
    });
  });

  describe('Set.methods', () => {
    it('add() - should add the item to the list', () => {
      const set = new Set();
      set.add(45);
      set.add(43);

      expect(set.dataStore.length).to.eql(2);
      expect(set.dataStore.indexOf(45) > -1).to.be.true;
      expect(set.dataStore.indexOf(43) > -1).to.be.true;
    });

    it('add() - should add the values only one time', () => {
      const set = new Set();
      set.add(45);
      set.add(45);
      set.add(45);
      set.add(45);
      set.add(45);

      expect(set.dataStore.length).to.eql(1);
      expect(set.dataStore.indexOf(45) > -1).to.be.true;
    });

    it('remove() - should remove the item from the list', () => {
      const set = new Set();
      set.add(45);
      set.add(43);
      set.remove(45);

      expect(set.dataStore.length).to.eql(1);
      expect(set.dataStore.indexOf(43) > -1).to.be.true;
    });

    it('remove() - should return false for no items', () => {
      const set = new Set();

      set.add(34);
      const out = set.remove(45);

      expect(out).to.be.false;
      expect(set.dataStore.length).to.eql(1);
      expect(set.dataStore.indexOf(34) > -1).to.be.true;
    });

    it('show() - should return the datastore', () => {
      const set = new Set();

      set.add(34);
      set.add(46);
      const out = set.show();

      expect(out).to.be.eql([34, 46]);
      expect(out.length).to.eql(2);
    });

    it('contains() - should return true', () => {
      const set = new Set();

      set.add(34);
      set.add(46);
      const out = set.contains(46);

      expect(out).to.be.true;
    });

    it('contains() - should return false', () => {
      const set = new Set();

      set.add(34);
      set.add(46);
      const out = set.contains(56);

      expect(out).to.be.false;
    });

    it('union() - should return union of elements', () => {
      const set = new Set();

      set.add(34);
      set.add(46);

      const set2 = new Set();

      set2.add(34);
      set2.add(46);
      set2.add(45);
      set2.add(44);
      const out = set.union(set2);

      expect(out).to.eql([34, 46, 45, 44]);
    });

    it('intersect() - should return union of elements', () => {
      const set = new Set();

      set.add(34);
      set.add(46);

      const set2 = new Set();

      set2.add(34);
      set2.add(46);
      set2.add(45);
      set2.add(44);
      const out = set.intersect(set2);

      expect(out).to.eql([34, 46]);
    });

    it('subset() - should return false', () => {
      const set = new Set();

      set.add(34);
      set.add(46);

      const set2 = new Set();

      set2.add(34);
      set2.add(46);
      set2.add(45);
      set2.add(44);

      const out = set.subset(set2);

      expect(out).to.be.false;
    });

    it('subset() - should return false', () => {
      const set = new Set();

      set.add(34);
      set.add(46);
      set.add(45);
      set.add(44);

      const set2 = new Set();

      set2.add(34);
      set2.add(46);
      set2.add(54);

      const out = set.subset(set2);

      expect(out).to.be.false;
    });

    it('subset() - should return true', () => {
      const set = new Set();

      set.add(34);
      set.add(46);
      set.add(45);
      set.add(44);

      const set2 = new Set();

      set2.add(34);
      set2.add(46);

      const out = set.subset(set2);
      expect(out).to.be.true;
    });
  });
});
