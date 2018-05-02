/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Node from '../src/Trees/Node';
import BST from '../src/Trees/BinaryTree';
import sinon from 'sinon';

describe('Node - Class and Methods', () => {
  describe('Node.properties', () => {
    it('should have the data, left and right', () => {
      const n = new Node();
      expect(n).to.have.property('data');
      expect(n).to.have.property('left');
      expect(n).to.have.property('right');
      expect(typeof(n)).to.eql('object');
    });

    it('should have the data, left and right', () => {
      const n = new Node([34, 56], 34, 56);
      expect(n).to.have.property('data');
      expect(n).to.have.property('left');
      expect(n).to.have.property('right');
      expect(typeof(n)).to.eql('object');
    });
  });
  describe('BST.properties', () => {
    it('should have the root', () => {
      const bst = new BST();
      expect(bst).to.have.property('root');
      expect(bst.root).to.be.null;
      expect(typeof(bst)).to.eql('object');
    });
  });
});

describe('BST - Functions', () => {
  describe('Insert()', () => {
    it('should insert the element in the binary tree', () => {
      const tree = new BST();
      tree.insert(34);

      expect(tree.root.data).to.eql(34);
      expect(tree.root.left).to.be.null;
      expect(tree.root.right).to.be.null;
    });

    it('should insert the element in the binary tree in correct order', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      expect(tree.root.data).to.eql(34);
      expect(tree.root.left.data).to.eql(31);
      expect(tree.root.left.left.data).to.eql(29);
      expect(tree.root.right.data).to.eql(35);
      expect(tree.root.right.right.data).to.eql(40);
    });
  });

  describe('static Inorder()', () => {
    it('Should traverse the tree properly', () => {
      const tree = new BST();
      const spy = sinon.spy(console, 'log');
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      BST.inOrder(tree.root);

      expect(spy.callCount).to.eql(5);
      spy.restore();
    });
  });

  describe('static Preorder()', () => {
    it('Should traverse the tree properly', () => {
      const tree = new BST();
      const spy = sinon.spy(console, 'log');
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      BST.preOrder(tree.root);

      expect(spy.callCount).to.eql(5);
      spy.restore();
    });
  });

  describe('static Postorder()', () => {
    it('Should traverse the tree properly', () => {
      const tree = new BST();
      const spy = sinon.spy(console, 'log');
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      BST.postOrder(tree.root);

      expect(spy.callCount).to.eql(5);
      spy.restore();
    });
  });

  describe('getMin()', () => {
    it('Should return the minimum value of the tree', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      const out = tree.getMin();
      expect(out).to.eql(29);
    });

    it('Should return the null', () => {
      const tree = new BST();

      const out = tree.getMin();
      expect(out).to.eql(null);
    });
  });

  describe('getMax()', () => {
    it('Should return the maximum value of the tree', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      const out = tree.getMax();
      expect(out).to.eql(40);
    });

    it('Should return the null', () => {
      const tree = new BST();

      const out = tree.getMax();
      expect(out).to.eql(null);
    });
  });

  describe('find()', () => {
    it('Should return null', () => {
      const tree = new BST();

      const out = tree.find(54);
      expect(out).to.eql(false);
    });

    it('Should return the root node', () => {
      const tree = new BST();
      tree.insert(34);
      const out = tree.find(34);
      expect(out).to.eql({ data: 34, left: null, right: null });
    });

    it('Should return the left found node', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);
      const out = tree.find(29);
      expect(out).to.eql({ data: 29, left: null, right: null });
    });

    it('Should return the right found node', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);
      const out = tree.find(40);
      expect(out).to.eql({ data: 40, left: null, right: null });
    });
  });

  describe('getNodeCount()', () => {
    it('Should return null', () => {
      const tree = new BST();

      const out = tree.getNodeCount();
      expect(out).to.eql(0);
    });

    it('Should return 3', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);

      const out = tree.getNodeCount();
      expect(out).to.eql(3);
    });

    it('Should return 6', () => {
      const tree = new BST();
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);
      tree.insert(45);

      const out = tree.getNodeCount();
      expect(out).to.eql(6);
    });
  });
});
