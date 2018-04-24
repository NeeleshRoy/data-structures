export class HashTable {
  constructor(size = 137) {
    this.table = new Array(size);
  }

  hash(string) {
    const H = 37;
    let total = 0;

    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    return parseInt(total, 10);
  }

  showDistro() {
    const output = [];
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        output[i] = this.table[i];
      }
    }
    return output;
  }

  put(key, data) {
    const pos = this.hash(key);
    this.table[pos] = data;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}
