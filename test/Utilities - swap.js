/**
 * data-structures
 *
 * Copyright © 2016 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import swap from '../src/utilities/swap';

describe('Utilities', () => {

  describe('Swap', () => {

    it('should swap two numbers', () => {
      const a = 1;
      const b = 2;
      const output = swap(a, b);
      expect(typeof(output)).to.eql('object');
      expect(output).to.eql([2, 1]);
    });
  });
});
