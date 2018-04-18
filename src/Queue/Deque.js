class Deque {
  constructor(datastore = []) {
    this.datastore = datastore;
  }
  enqueue_front(item) {
    this.datastore.unshift(item);
  }
  
  enqueue_back(item) {
    this.datastore.push(item);
  }
  dequeue_back() {
    this.datastore.pop();
  }
  
  dequeue_front() {
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
