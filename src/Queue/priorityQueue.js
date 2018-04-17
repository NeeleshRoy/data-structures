export default class {
  constructor(datastore = []) {
    this.datastore = datastore;
  }
  
  enqueue(value, priority) {
    const obj = {
      value,
      priority
    }
    this.datastore.push(obj);
  }
  
  dequeue() {
    let priority = this.datastore[0].priority;
    for (let i = 1; i < this.datastore.length; ++i) {
      if (this.datastore[i].priority < priority) {
        priority = i;
      }
    }
    return this.datastore.splice(priority,1);
  }
  
  toString() {
    return this.datastore;
  }
}