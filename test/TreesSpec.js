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
      tree.insert(34);
      tree.insert(35);
      tree.insert(31);
      tree.insert(29);
      tree.insert(40);

      BST.inOrder(tree.root);
    });
  });
});
