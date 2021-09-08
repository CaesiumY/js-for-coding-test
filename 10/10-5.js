const solution = (nodes, lines, graph) => {
  const findParent = (parent, index) => {
    if (parent[index] !== index) {
      parent[index] = findParent(parent, parent[index]);
    }
    return parent[index];
  };

  const unionParent = (parent, from, to) => {
    const fromRoot = findParent(parent, from);
    const toRoot = findParent(parent, to);

    fromRoot > toRoot
      ? (parent[fromRoot] = toRoot)
      : (parent[toRoot] = fromRoot);
  };

  const isCycle = (parent, from, to) =>
    findParent(parent, from) === findParent(parent, to);

  const parent = Array.from(Array(nodes + 1), (_, i) => i);

  const edges = graph.slice().sort((a, b) => a[2] - b[2]);
  let result = 0;

  for (let [from, to, cost] of edges) {
    if (!isCycle(parent, from, to)) {
      unionParent(parent, from, to);
      result += cost;
    }
  }

  console.log(result);
};

const graph = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [4, 7, 13],
  [5, 6, 53],
  [6, 7, 25],
];

solution(7, 9, graph);
