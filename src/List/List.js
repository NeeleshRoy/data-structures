export default class List {
  constructor(datastore = [], pos = 0, listSize = 0) {
    this.datastore = datastore;
    this.pos = pos;
    this.listSize = listSize;
  }

  clear() {
    this.datastore = [];
    this.pos = 0;
    this.listSize = 0;
  }

  find(element) {
    return this.datastore.findIndex((el) => el === element);
  }

  length() {
    if (this.datastore.length > 0) return this.datastore.length;
    return this.listSize;
  }

  toString() {
    return this.datastore;
  }

  getElement() {

  }

  insert() {

  }

  append(element) {
    this.datastore[this.listSize++] = element;
  }

  remove(element) {
    const index = this.find(element);
    if (index > -1) {
      this.datastore.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  front() {

  }

  end() {

  }

  prev() {

  }

  next() {

  }

  currPos() {

  }

  moveTo() {

  }
}
