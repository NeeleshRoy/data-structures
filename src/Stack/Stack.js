export default class Stack {
  constructor() {
    this.datastore = [];
    this.top = 0;
  }
  push(element) {
    this.datastore[this.top++] = element;
  }
  pop() {
    if(this.top === 0) return;
    this.datastore = this.datastore.splice(0, --this.top);
    return this.datastore[this.top - 1]; 
  }
  peek() {
    return this.datastore[this.top - 1];
  }
  length() {
    return this.top;
  }
  clear() {
    this.datastore = [];
    this.top = 0;
  }
  toString() {
    return this.datastore;
  }
}
