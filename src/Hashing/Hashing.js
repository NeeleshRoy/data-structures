export default class HashTable {
  constructor(data = [], size) {
    this.table = new Array(size);
  }

  put(data) {
    const pos = this.simpleHash(data);
    this.table[pos] = data;
  }

  putWithoutCollisions(data) {
    const pos = this.betterHash(data);
    this.table[pos] = data;
  }

  simpleHash(data) {
    let total = 0;
    for (let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  betterHash(data) {
    let total = 0;
    const H = 37;
    for (let i = 0; i < data.length; ++i) {
      total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    return Number.parseInt(total, 10);
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

  getIndices() {
    const output = [];
    for (let i = 0; i < this.table.length; ++i) {
      if (this.table[i] !== undefined) {
        output.push(i);
      }
    }
    return output;
  }
}
