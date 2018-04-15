/**
 * data-structures
 *
 * Copyright © 2016 Neelesh Roy. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { expect } from 'chai';
import List from '../src/List/List';
import driverQuestion1 from '../src/List/question-1';
import driverQuestion2 from '../src/List/question-2';
import { PersonList, Person } from '../src/List/question-3';

describe('List - Questions', () => {

  describe('Question - 1', () => {

    it('Should add the numeric items to the list', () => {
      const list = new List([1, 2, 4], 0, 3);
      const out = driverQuestion1(5, list);
      expect(out.toString()).to.eql([1, 2, 4, 5]);
      expect(out.length()).to.eql(4);
    });

    it('Should add the string items to the list', () => {
      const list = new List(['a', 'b', 'c'], 0, 3);
      const out = driverQuestion1('d', list);
      expect(out.toString()).to.eql(['a', 'b', 'c', 'd']);
      expect(out.length()).to.eql(4);
    });

    it('Should add the multiple string items to the list', () => {
      const list = new List(['aab', 'bbb', 'ccb'], 0, 3);
      const out = driverQuestion1('cdb', list);
      expect(out.toString()).to.eql(['aab', 'bbb', 'ccb', 'cdb']);
      expect(out.length()).to.eql(4);
    });

    it('Should return false for no match', () => {
      const list = new List([1, 2, 4], 0, 3);
      const out = driverQuestion1(1, list);
      expect(out.toString()).to.eql([1, 2, 4]);
      expect(out.length()).to.eql(3);
    });
  });

  describe('Question - 2', () => {

    it('Should add the numeric items to the list', () => {
      const list = new List([1, 2, 4], 0, 3);
      const out = driverQuestion2(3, list);
      expect(out.toString()).to.eql([1, 2, 4, 3]);
      expect(out.length()).to.eql(4);
    });

    it('Should add the string items to the list', () => {
      const list = new List(['d', 'b', 'c'], 0, 3);
      const out = driverQuestion2('a', list);
      expect(out.toString()).to.eql(['d', 'b', 'c', 'a']);
      expect(out.length()).to.eql(4);
    });

    it('Should add the multiple string items to the list', () => {
      const list = new List(['aab', 'bbb', 'ccb'], 0, 3);
      const out = driverQuestion2('aaa', list);
      expect(out.toString()).to.eql(['aab', 'bbb', 'ccb', 'aaa']);
      expect(out.length()).to.eql(4);
    });

    it('Should return false for no match', () => {
      const list = new List([1, 2, 4], 0, 3);
      const out = driverQuestion2(5, list);
      expect(out.toString()).to.eql([1, 2, 4]);
      expect(out.length()).to.eql(3);
    });
  });

  describe('Question - 3', () => {
    const personList = new PersonList([]);

    personList.addPerson('Neelesh', 'male');
    personList.addPerson('Diya', 'female');

    it('Should have default person properties on invoking addPerson Method', () => {
      const pList = new PersonList([]);
      pList.addPerson();

      const out = pList.personList.toString();
      expect(out).to.eql([{ name: '', gender: 'male' }]);
    });

    it('Should have default person properties', () => {
      const person = new Person();

      expect(person).to.have.property('name');
      expect(person).to.have.property('gender');
      expect(person.name).to.eql('');
      expect(person.gender).to.eql('male');
    });

    it('Should have person properties', () => {
      const person = new Person('Neelesh', 'male');

      expect(person).to.have.property('name');
      expect(person).to.have.property('gender');
      expect(person.name).to.eql('Neelesh');
      expect(person.gender).to.eql('male');
    });

    it('Should have default personList properties', () => {
      const pList = new PersonList();

      expect(pList).to.have.property('personList');
      expect(pList.personList.datastore).to.eql([]);
    });

    it('Should return female person objects', () => {
      const out = personList.getQualifiedPerson('female');
      expect(out).to.eql([{ name: 'Diya', gender: 'female' }]);
    });

    it('Should return male person objects', () => {
      const out = personList.getQualifiedPerson('male');
      expect(out).to.eql([{ name: 'Neelesh', gender: 'male' }]);
    });

    it('Should return an empty array', () => {
      const out = personList.getQualifiedPerson('foo');
      expect(out).to.eql([]);
    });
  });
});
