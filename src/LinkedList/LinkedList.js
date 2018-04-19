class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

export class LinkedList {
  constructor(element) {
    this.head = new Node(element);
  }

  _find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  _findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next == null) && currNode.next.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newEl, item) {
    const newNode = new Node(newEl);
    const current = this._find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  delete(item) {
    const prevNode = this._findPrevious(item);
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    const elements = [this.head.element];
    while (!(currNode.next === null)) {
      elements.push(currNode.next.element);
      currNode = currNode.next;
    }

    return elements;
  }
}
