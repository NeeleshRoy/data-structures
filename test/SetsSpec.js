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
});