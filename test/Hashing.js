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
  });
});