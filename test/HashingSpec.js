/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import { HashTable } from '../src/Hashing/HashTable';

describe('Hashing - Class and Methods', () => {
  describe('Hashing.properties', () => {
    it('Contructor', () => {
      const ht = new HashTable();
      expect(ht.table).to.exist;
      expect(ht.table.length).to.eql(137);
    });

    it('should have a table of size 173', () => {
      const ht = new HashTable(173);
      expect(ht.table).to.exist;
      expect(ht.table.length).to.eql(173);
    });
  });

  describe('Hashing.functions', () => {
    it('put() - Should save the item hashed', () => {
      const ht = new HashTable();
      ht.put('8727618', 'Neelesh');

      expect(ht.table.indexOf('Neelesh')).to.above(0);
      expect(ht.table.indexOf('Neelesh')).to.below(137);
    });

    it('get() - Should get the item', () => {
      const ht = new HashTable();
      ht.put('Neelesh', '83728647');
      const out = ht.get('Neelesh');
      expect(out).to.eql('83728647');
    });

    it('showDistro() - Should get the distribution of items as an array', () => {
      const ht = new HashTable();
      ht.put('Neelesh', '83728647');
      ht.put('John', '78839445');
      ht.put('Jack', '74829478');
      const out = ht.showDistro();

      expect(out.indexOf('83728647')).to.be.above(0);
      expect(out.indexOf('78839445')).to.be.above(0);
      expect(out.indexOf('74829478')).to.be.above(0);
      expect(out.indexOf('83728647')).to.be.below(137);
      expect(out.indexOf('78839445')).to.be.below(137);
      expect(out.indexOf('74829478')).to.be.below(137);
    });
  });
});
