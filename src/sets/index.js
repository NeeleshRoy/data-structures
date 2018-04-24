export default class set {
  constructor(data = []) {
    this.dataStore = data;
  }

  add(item) {
    if (this.dataStore.indexOf(item) > -1) {
      this.dataStore.push(item);
      return true;
    }
    return false;
  }

  remove(item) {
    const pos = this.dataStore.indexOf(item);
    if (pos > -1) {
      this.dataStore.splice(pos, 1);
    }
  }
}
