export default class List {
  constructor(datastore = [], pos = 0, listSize = 0) {
    this.datastore = datastore;
    this.pos = pos;
    this.listSize = listSize;
  }

  clear() {
    this.datastore = [];
    this.pos = 0;
    this.listSize = 0;
  }

  find(element) {
    return this.datastore.findIndex((el) => el === element);
  }

  length() {
    if (this.datastore.length > 0) return this.datastore.length;
    return this.listSize;
  }

  toString() {
    return this.datastore;
  }

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.datastore.splice(insertPos + 1, 0, element);
      ++ this.listSize;
      return true;
    }
    return false;
  }

  contains(element) {
    let out = false;
    for (let i = 0; i < this.datastore.length; i++) {
      if (this.datastore[i] === element) {
        out = true;
      }
    }
    return out;
  }

  append(element) {
    this.datastore[this.listSize++] = element;
  }

  remove(element) {
    const index = this.find(element);
    if (index > -1) {
      this.datastore.splice(index, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < this.listSize - 1) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.datastore[this.pos];
  }
}
