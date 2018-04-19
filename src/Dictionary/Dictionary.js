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
    return Object.keys(this.datastore).length;
  }

  clear() {
    this.datastore = [];
  }

  sort() {
    const keys = Object.keys(this.datastore);   
    const sortedKeys = keys.sort();
    const tempDataStore = this.datastore;
    
    this.datastore = [];
    sortedKeys.forEach((key) => {
      this.datastore[key] = tempDataStore[key];
    })

    return true;
  }
}
