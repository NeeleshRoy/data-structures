/**
* data-structures
*
* Copyright © 2018 Neelesh Roy. Adict rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Dictionary from '../src/Dictionary/Dictionary';

describe('Dictionary - Class and Methods', () => {
  describe('Dictionary.properties', () => {
    it('should have the datastore', () => {
      const dict = new Dictionary();
      expect(dict).to.have.property('datastore');
      expect(typeof(dict.datastore)).to.eql('object');
      expect(dict.datastore).to.exist;
    });
  });
  describe('Dictionary.functions', () => {
    it('add() - Should Add the element to the Dictionary with key pair values', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');

      expect(dict.datastore.foo).to.exist;
      expect(dict.datastore.foo).to.eql('bar');
    });

    it('find() - Should Find and return the element value', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      const out = dict.find('abc');

      expect(out).to.eql('xyz');
    });

    it('remove() - Should Find and remove the element from dictionary', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      dict.remove('abc');

      expect(dict.datastore.foo).to.exist;
      expect(dict.datastore.abc).to.not.exist;
    });

    it('showAll() - Should show the string version of the datastore', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      const out = dict.showAll();
      expect(out.foo).to.exist;
      expect(out.abc).to.exist;
      expect(out.foo).to.eql('bar');
      expect(out.abc).to.eql('xyz');
    });

    it('count() - Should return the total number of elements in datastore', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      const count = dict.count();

      expect(count).to.eql(2);
    });

    it('clear() - Should clear the datastore', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      dict.clear();

      expect(dict.datastore).to.eql([]);
    });
  });
});
