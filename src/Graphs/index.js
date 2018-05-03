export default class {
  constructor(v = 0) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
    }
  }

  addEdges(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    ++this.edges;
  }

  toString() {
    let output = '';
    for (let i = 0; i < this.vertices; ++i) {
      output += ` ${i} -> `;
      for (let j = 0; j < this.adj[i].length; j++) {
        output += `[ ${j} ]`;
      }
    }
    return output;
  }
}
