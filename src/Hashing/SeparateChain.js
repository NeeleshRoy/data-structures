import { HashTable } from './HashTable';

export class SeparateChaining extends HashTable {
  constructor(size = 137) {
    super(size);
    this.table = new Array(size);
  }

  buildChains() {
    for (let i = 0; i < this.table.length; ++i) {
      this.table[i] = new Array(); // eslint-disable-line
    }
  }

  put(key, data) {
    const pos = super.hash(key);
    let index = 0;

    if (this.table[pos][index] === undefined) {
      this.table[pos][index + 1] = data;
    } else {
      ++index;
      while (this.table[pos][index] !== undefined) {
        ++index;
      }
      this.table[pos][index] = data;
    }
  }

  get(key) {
    const hash = super.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    const output = [];
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i][0] !== undefined) {
        output[i] = this.table[i];
      }
    }
    return output;
  }
}
