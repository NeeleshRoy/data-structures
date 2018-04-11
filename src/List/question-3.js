import List from './List';

export class Person {
  constructor(name = '', gender = 'male') {
    this.name = name;
    this.gender = gender;
  }
}

export class PersonList extends List {
  constructor(personList = []) {
    super(personList);
    this.personList = new List(personList);
  }

  addPerson(name = '', gender = 'male') {
    const obj = {
      name, gender,
    };
    this.personList.append(obj);
  }

  getQualifiedPerson(gender) {
    const out = [];
    for (let i = 0; i < this.personList.length(); i++) {
      if (this.personList.datastore[i].gender === gender) {
        out.push(this.personList.datastore[i]);
      }
    }
    return out;
  }
}
