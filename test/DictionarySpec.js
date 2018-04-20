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
import Problem1 from '../src/Dictionary/problem-1';

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

    it('sort() - Should sort the datastore', () => {
      const dict = new Dictionary();
      dict.add('foo', 'bar');
      dict.add('abc', 'xyz');
      dict.add('aaa', 'bbb');
      dict.sort();
      const keys = Object.keys(dict.datastore);

      expect(keys[0]).to.eql('aaa');
      expect(keys[1]).to.eql('abc');
      expect(keys[2]).to.eql('foo');
    });
  });

  describe('Dictionary.question-1', () => {
    it('Should Populate the data properly', () => {
      const solution = new Problem1();
      solution.populateData();
      expect(solution.dict.count()).to.eql(100);
    });

    it('Get the phone number', () => {
      const solution = new Problem1();
      solution.populateData();
      const out = solution.getPhone('Emmet McCudden');
      expect(out).to.eql('424-602-5213');
    });

    it('Add the phone number', () => {
      const solution = new Problem1();
      solution.populateData();
      solution.addPhone('Neelesh Roy', '991-827-9374');

      expect(solution.dict.count()).to.eql(101);
      expect(solution.dict.datastore['Neelesh Roy']).to.exist;
      expect(solution.dict.datastore['Neelesh Roy']).to.eql('991-827-9374');
    });

    it('Remove the phone number', () => {
      const solution = new Problem1();
      solution.populateData();
      solution.removePhone('Sherm Glanton');

      expect(solution.dict.count()).to.eql(99);
      expect(solution.dict.datastore['Sherm Glanton']).to.not.exist;
    });

    it('should clear all the data', () => {
      const solution = new Problem1();
      solution.populateData();
      solution.clearAll();

      expect(solution.dict.count()).to.eql(0);
      expect(solution.dict.datastore).to.eql([]);
    });
  });
});
