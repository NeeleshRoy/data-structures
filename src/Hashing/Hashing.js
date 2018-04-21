export default class HashTable{
  constructor(data = [], size) {
    this.table = new Array(size);
  }

  put(data) {
    const pos = this.simpleHash(data);
    this.table[pos] = data;
  }

  simpleHash(data) {
    let total = 0;
    for(let i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  showDistro() {
    let n = 0;
    const output = [];
    for(let i = 0; i < this.table.length; ++i) {
      if(this.table[i] !== undefined) {
        output[i] = this.table[i];
      }
    }
    return output;
  }
}