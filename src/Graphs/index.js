export default class {
  constructor(v = 0) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
    }
    this.marked = [];
    for (let i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
    }
    this.edgeTo = [];
  }

  addEdges(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  toString() {
    let output = '';
    for (let i = 0; i < this.vertices; ++i) {
      output += ` ${i} -> `;
      for (let j = 0; j < this.adj[i].length; ++j) {
        output += `[ ${this.adj[i][j]} ]`;
      }
    }
    return output;
  }

  dfs(v) {
    this.marked[v] = true;
    console.log(`${v}`);

    this.adj[v].forEach(w => {
      if (!this.marked[w]) {
        this.dfs(w);
      }
    });
  }

  bfs(s) {
    const queue = [];
    this.marked[s] = true;
    queue.push(s);

    while (queue.length > 0) {
      const v = queue.shift();
      if (v !== undefined) {
        console.log(`${v}`);
      }

      this.adj[v].forEach(w => {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      });
    }
  }
}
