import Dictionary from './Dictionary';
import getDirectoryData from './Directory';

export default class {
  constructor() {
    this.data = getDirectoryData();
    this.dict = new Dictionary();
  }
  populateData() {
    this.data.forEach(element => {
      this.dict.add(element.name, element.phone);
    });
    return this.dict;
  }
  getPhone(name) {
    return this.dict.datastore[name];
  }
  addPhone(name, phone) {
    this.dict.add(name, phone);
  }
  removePhone(name) {
    delete this.dict.datastore[name];
  }
  clearAll() {
    this.dict.clear();
  }
}
