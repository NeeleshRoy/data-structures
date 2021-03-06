/**
* data-structures
*
* Copyright © 2016 Neelesh Roy. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import { expect } from 'chai';
import Graph from '../src/Graphs';

describe('Graphs - Class and Methods', () => {
  describe('Graphs.properties', () => {
    it('Constructor', () => {
      const g = new Graph();

      expect(g.vertices).to.exist;
      expect(g.vertices).to.eql(0);
      expect(g.edges).to.exist;
      expect(g.edges).to.eql(0);
      expect(g.adj).to.exist;
      expect(g.adj).to.eql([]);
    });

    it('Contructor with values', () => {
      const g = new Graph(5);

      expect(g.vertices).to.exist;
      expect(g.vertices).to.eql(5);
      expect(g.edges).to.exist;
      expect(g.edges).to.eql(0);
      expect(g.adj).to.exist;
      expect(g.adj).to.eql([[], [], [], [], []]);
    });
  });

  describe('Graphs.addEdges()', () => {
    it('Should add the edge properly', () => {
      const g = new Graph(3);

      g.addEdges(0, 1);
      g.addEdges(0, 2);
      expect(g.adj[1]).to.eql([0]);
      expect(g.adj[0]).to.eql([1, 2]);
      expect(g.edges).to.eql(2);
    });
  });

  describe('Graphs.toString()', () => {
    it('Should show the graph in string version', () => {
      const g = new Graph(3);

      g.addEdges(0, 1);
      g.addEdges(0, 2);
      expect(g.toString()).to.eql(' 0 -> [ 1 ][ 2 ] 1 -> [ 0 ] 2 -> [ 0 ]');
    });
  });

  describe('Graphs.dfs()', () => {
    it('Should perform a depth first search on the graph', () => {
      const g = new Graph(5);

      g.addEdges(0, 1);
      g.addEdges(0, 2);
      g.addEdges(1, 3);
      g.addEdges(2, 4);
      g.dfs(0);
    });
  });

  describe('Graphs.bfs()', () => {
    it('Should perform a breadth first search on the graph', () => {
      const g = new Graph(5);

      g.addEdges(0, 1);
      g.addEdges(0, 2);
      g.addEdges(1, 3);
      g.addEdges(2, 4);
      g.bfs(0);
    });
  });
});
