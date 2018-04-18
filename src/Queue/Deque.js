class Deque {
  constructor(datastore = []) {
    this.datastore = datastore;
  }
  enqueueFront(item) {
    this.datastore.unshift(item);
  }
  enqueueBack(item) {
    this.datastore.push(item);
  }
  dequeueBack() {
    this.datastore.pop();
  }
  dequeueFront() {
    this.datastore.shift();
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

export default Deque;
