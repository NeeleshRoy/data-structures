class Queue {
  constructor(datastore = []) {
    this.datastore = datastore;
  }

  enqueue(item) {
    this.datastore.push(item);
  }

  dequeue() {
    this.datastore.shift();
  }

  front() {
    return this.datastore[0];
  }

  back() {
    return this.datastore[this.datastore.length - 1];
  }

  toString() {
    return this.datastore;
  }

  clear() {
    this.datastore = [];
  }

  isEmpty() {
    if (this.datastore.length === 0) {
      return true;
    }
    return false;
  }
}

export default Queue;
