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

  union(set) {
    const temp = new Set();
    for (let i = 0; i < this.dataStore.length; ++i) {
      temp.add(this.dataStore[i]);
    }

    set.dataStore.forEach(element => {
      if (!temp.contains(element)) {
        temp.dataStore.push(element);
      }
    });
    return temp.dataStore;
  }

  intersect(set) {
    const temp = new Set();
    const intersect = [];
    for (let i = 0; i < this.dataStore.length; ++i) {
      temp.add(this.dataStore[i]);
    }

    set.dataStore.forEach(element => {
      if (temp.contains(element)) {
        intersect.push(element);
      }
    });
    return intersect;
  }

  subset(set) {
    if (this.dataStore.length < set.dataStore.length) return false;

    const temp = new Set();
    for (let i = 0; i < this.dataStore.length; ++i) {
      temp.add(this.dataStore[i]);
    }

    for (let i = 0; i < set.dataStore.length; i++) {
      if (!temp.contains(set.dataStore[i])) {
        return false;
      }
    }
    return true;
  }

  higher(element) {
    const sorted = this.dataStore.sort();
    for (const item of sorted) {
      if (item > element) {
        return item;
      }
    }
    return false;
  }

  lower(element) {
    const sorted = this.dataStore.sort().reverse();
    for (const item of sorted) {
      if (item < element) {
        return item;
      }
    }
    return false;
  }
}
