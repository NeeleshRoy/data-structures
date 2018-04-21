/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import sinon from 'sinon';
import HashTable from '../src/Hashing/Hashing';

describe('Hashing - Class and Methods', () => {
  describe('Hashing.properties', () => {
    it('Contructor', () => {
      const ht = new HashTable();
      expect(ht.table).to.exist;
    });
    it('should have a table of size 173', () => {
      const ht = new HashTable([], 173);
      expect(ht.table).to.exist;
      expect(ht.table.length).to.eql(173);
    });
  });
  describe('Hashing.functions', () => {
    it('Put() - Should add elements properly', () => {
      const ht = new HashTable([], 173);
      const spy = sinon.spy(ht.simpleHash);
      ht.put(23);
      expect(ht.table.indexOf(23)).to.be.above(-1);
      expect(spy).to.be.calledOnce;
    });
    it('simpleHash() - Should hash element data', () => {
      const ht = new HashTable([], 173);
      const out = ht.simpleHash('test');
      expect(out).to.equal(102);
    });
    it('betterHash() - Should hash element data perfectly without collisions', () => {
      const ht = new HashTable([], 137);
      const names = ['Waylon', 'Justine', 'Mathias', 'Angela', 'Joanna', 'Lia'];
      names.forEach(element => {
        ht.putWithoutCollisions(element);
      });
      const out = ht.getIndices();
      expect(out.length).to.eql(6);
    });
    it('showDistro() - Should show elements of data with indices', () => {
      const ht = new HashTable([], 173);
      ht.put('Neelesh');
      ht.put('Jason');
      ht.put('olivia');
      const out = ht.showDistro();
      expect(out.indexOf('Neelesh')).to.be.above(-1);
      expect(out.indexOf('Jason')).to.be.above(-1);
      expect(out.indexOf('olivia')).to.be.above(-1);
    });
    it('showDistro() - Should return empty array', () => {
      const ht = new HashTable([], 173);
      const out = ht.showDistro();
      expect(out).to.eql([]);
    });
  });
});
