/**
 * data-structures
 *
 * Copyright © 2016 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import arrayRotate from '../src/arrays/01-array-rotation';
import arrayRotateReverse from '../src/arrays/02-array-rotation-reverse';

describe('Arrays - Reverse', () => {

  describe('Array.rotate()', () => {

    it('should return the same array if rotation input is equal to array length', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotate(arr, 5);
      expect(output).to.eql([1, 2, 3, 4, 5]);
    });

    it('should return the rotated array by 3 spaces', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotate(arr, 3);
      expect(output).to.eql([4, 5, 1, 2, 3]);
    });

    it('should return the same array if rotation input is 0', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotate(arr, 0);
      expect(output).to.eql([1, 2, 3, 4, 5]);
      expect(typeof(output)).to.equal('object');
    });
  });

  describe('Array.rotate() -  Reverse Algorithm', () => {

    it('should return the same array if rotation input is equal to array length', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotateReverse(arr, 5);
      expect(output).to.eql([1, 2, 3, 4, 5]);
    });

    it('should return the rotated array by 3 spaces', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotateReverse(arr, 3);
      expect(output).to.eql([4, 5, 1, 2, 3]);
    });

    it('should return the same array if rotation input is 0', () => {
      const arr = [1, 2, 3, 4, 5];
      const output = arrayRotateReverse(arr, 0);
      expect(output).to.eql([1, 2, 3, 4, 5]);
      expect(typeof(output)).to.equal('object');
    });
  });

});
