export default class Stack {
  constructor() {
    this.datastore = [];
    this.top = 0;
  }
  push(element) {
    this.datastore[this.top++] = element;
  }
  pop() {
    return this.datastore[--this.top];
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
