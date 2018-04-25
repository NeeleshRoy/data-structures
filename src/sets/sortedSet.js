import Set from './index';

export default class extends Set{
  constructor() {
    super();
  }

  sort() {
    this.dataStore.sort();
  }

  add(item) {
    if (this.dataStore.indexOf(item) < 0) {
      this.dataStore.push(item);
      this.sort();
      return true;
    }
    return false;
  }
}