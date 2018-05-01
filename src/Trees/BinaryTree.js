import Node from './Node';

export default class {
  constructor() {
    this.root = null;
  }

  insert(element) {
    const n = new Node(element);
    if (this.root === null) {
      this.root = n;
      return true;
    }
    let currentNode = this.root;
    let parent;
    while (true) {
      parent = currentNode;
      if (element < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          parent.left = n;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = n;
          break;
        }
      }
    }
    return true;
  }

  static inOrder(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }

  static preOrder(node) {
    if (!(node === null)) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  static postOrder(node) {
    if (!(node === null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  }

  getMin() {
    let current = this.root;
    if (current === null) {
      return null;
    }

    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  getMax() {
    let current = this.root;
    if (current === null) {
      return null;
    }

    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  find(element) {
    if (!this.root) return false;
    if (this.root.data === element) return this.root;

    let current = this.root;
    while (current.data !== element) {
      if (element < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current;
  }
}

