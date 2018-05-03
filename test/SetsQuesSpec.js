/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import SortedSet from '../src/sets/sortedSet';

describe('SortedSet - Class and Methods', () => {
  describe('SortedSet.properties', () => {
    it('should have the datastore', () => {
      const set = new SortedSet();
      expect(set).to.have.property('dataStore');
      expect(typeof(set.dataStore)).to.eql('object');
    });
  });

  describe('Set.methods', () => {
    it('add() - should add the item to the list', () => {
      const set = new SortedSet();
      set.add(45);
      set.add(43);

      expect(set.dataStore.length).to.eql(2);
      expect(set.dataStore.indexOf(45) > -1).to.be.true;
      expect(set.dataStore.indexOf(43) > -1).to.be.true;
    });

    it('add() - should add the item to the list and sort', () => {
      const set = new SortedSet();
      set.add(45);
      set.add(43);

      expect(set.dataStore.length).to.eql(2);
      expect(set.dataStore).to.eql([43, 45]);
      expect(set.dataStore.indexOf(45) > -1).to.be.true;
      expect(set.dataStore.indexOf(43) > -1).to.be.true;
    });

    it('add() - should not add', () => {
      const set = new SortedSet();
      set.add(45);
      set.add(45);

      expect(set.dataStore.length).to.eql(1);
      expect(set.dataStore).to.eql([45]);
      expect(set.dataStore.indexOf(45) > -1).to.be.true;
    });

    it('remove() - should remove the item from the list and sort', () => {
      const set = new SortedSet();
      set.add(45);
      set.add(43);
      set.add(54);
      set.add(19);

      set.remove(43);

      expect(set.dataStore.length).to.eql(3);
      expect(set.dataStore).to.eql([19, 45, 54]);
    });
  });
});
