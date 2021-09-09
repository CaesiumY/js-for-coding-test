const solution = (nodes, lines, graph) => {
  const findParent = (parent, index) => {
    if (parent[index] !== index)
      parent[index] = findParent(parent, parent[index]);
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
  let last = 0;
  let result = 0;

  const edges = graph.slice().sort((a, b) => a[2] - b[2]);

  for (let [from, to, cost] of edges) {
    if (!isCycle(parent, from, to)) {
      unionParent(parent, from, to);
      last = cost;
      result += cost;
    }
  }

  console.log(result - last);
};

const graph = [
  [1, 2, 3],
  [1, 3, 2],
  [3, 2, 1],
  [2, 5, 2],
  [3, 4, 4],
  [7, 3, 6],
  [5, 1, 5],
  [1, 6, 2],
  [6, 4, 1],
  [6, 5, 3],
  [4, 5, 3],
  [6, 7, 4],
];

solution(7, 12, graph);
