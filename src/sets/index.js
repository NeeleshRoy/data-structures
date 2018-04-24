export default class Set {
  constructor() {
    this.dataStore = [];
  }

  add(item) {
    if (this.dataStore.indexOf(item) < 0) {
      this.dataStore.push(item);
      return true;
    }
    return false;
  }

  remove(item) {
    const pos = this.dataStore.indexOf(item);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
      return true;
    }
    return false;
  }

  show() {
    return this.dataStore;
  }

  contains(item) {
    if (this.dataStore.indexOf(item) > -1) {
      return true;
    }
    return false;
  }
}
