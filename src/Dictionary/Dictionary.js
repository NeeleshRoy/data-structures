export default class {
  constructor() {
    this.datastore = [];
  }

  add(key, value) {
    this.datastore[key] = value;
  }

  find(key) {
    return this.datastore[key];
  }

  remove(key) {
    delete this.datastore[key];
  }

  showAll() {
    return this.datastore;
  }

  count() {
    let count = 0;
    for(let i in this.datastore) {
      ++count;
    }
    return count;
  }
}
