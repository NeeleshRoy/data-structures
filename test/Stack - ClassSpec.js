/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Stack from '../src/Stack/Stack';
import palindrome from '../src/Stack/Palindrome';
import missingParen from '../src/Stack/MissingParenthesis';
import pezDispenser from '../src/Stack/pezDispenser';

describe('Stack - Class and Methods', () => {

  describe('Stack.properties', () => {
    it('should have the datastore and top', () => {
      const stack = new Stack();
      expect(stack).to.have.property('datastore');
      expect(stack).to.have.property('top');
      expect(typeof(stack.datastore)).to.eql('object');
    });
  });

  describe('Stack.functions', () => {
    it('push() - Should save the elements properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);

      expect(stack.datastore).to.eql([2, 3]);
      expect(stack.top).to.eql(2);
    });

    it('push() - Should save multiple variable types properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3.2);
      stack.push('foo');
      stack.push({ foo: 'bar' });

      expect(stack.datastore).to.eql([2, 3.2, 'foo', { foo: 'bar' }]);
      expect(stack.top).to.eql(4);
    });

    it('pop() - Should remove the elements properly', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const out = stack.pop();

      expect(stack.datastore).to.eql([2, 3, 4]);
      expect(out).to.eql(4);
      expect(stack.top).to.eql(2);
    });

    it('peek() - Should return the top most element', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.pop();
      const out = stack.peek();

      expect(out).to.eql(3);
      expect(stack.datastore).to.eql([2, 3, 4]);
    });

    it('clear() - Should clear the elements of the stack', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.clear();

      expect(stack.datastore).to.eql([]);
      expect(stack.top).to.eql(0);
    });

    it('toString() - Should return the elements of the stack', () => {
      const stack = new Stack();
      stack.push(2);
      stack.push(3);
      stack.push(4);
      const out = stack.toString();

      expect(out).to.eql([2, 3, 4]);
      expect(stack.length()).to.eql(3);
    });
  });

  describe('Stack.Palindrome', () => {
    it('should return true', () => {
      const isPalindrome = palindrome('racecar');
      expect(isPalindrome).to.be.true;
    });

    it('should return false', () => {
      const isPalindrome = palindrome('neelesh');
      expect(isPalindrome).to.be.false;
    });
  });

  describe('Stack.MissingParenthesis', () => {
    it('Should return -1 for no matches', () => {
      const exp = '2.3 + (23 / 12) + 3.14159 * .24';
      const out = missingParen(exp);

      expect(out).to.eql(-1);
    });

    it('Should return -1 for no closing bracket matches', () => {
      const exp = '2.3 + 23 / 12) + 3.14159 * .24';
      const out = missingParen(exp);

      expect(out).to.eql(13);
    });

    it('Should return the missing position', () => {
      const exp = '2.3 + (23 / 12 + 3.14159 * .24';
      const out = missingParen(exp);

      expect(out).to.eql(6);
    });

    it('Should return the missing position', () => {
      const exp = '2.3 + (23 / 12 + (3.14159 * .24)';
      const out = missingParen(exp);

      expect(out).to.eql(6);
    });
  });

  describe('Stack.pezDispenser', () => {
    it('Should filter out the yellow marbles', () => {
      const test = new Stack();
      test.push('red');
      test.push('red');
      test.push('yellow');
      test.push('blue');
      test.push('yellow');
      test.push('red');
      const out = pezDispenser(test);

      expect(out.datastore).to.eql(['red', 'red', 'blue', 'red']);
    });

    it('Should filter out the yellow marbles, and give datastore with no values', () => {
      const test = new Stack();
      test.push('yellow');
      test.push('yellow');
      test.push('yellow');
      test.push('yellow');
      const out = pezDispenser(test);

      expect(out.datastore).to.eql([]);
    });

    it('Should return the datastore with same values', () => {
      const test = new Stack();
      test.push('red');
      const out = pezDispenser(test);

      expect(out.datastore).to.eql(['red']);
    });
  });
});
