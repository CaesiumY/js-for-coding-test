const solution = (nodes, lines, graph) => {
  const findParent = (parent, index) => {
    if (parent[index] !== index)
      parent[index] = findParent(parent, parent[index]);
    return parent[index];
  };

  const unionParent = (parent, from, to) => {
    const fromRoot = findParent(parent, from);
    const toRoot = findParent(parent, to);

    fromRoot < toRoot
      ? (parent[toRoot] = fromRoot)
      : (parent[fromRoot] = toRoot);
  };

  const parent = Array.from(Array(nodes + 1), (_, i) => i);

  for (let [order, from, to] of graph) {
    if (order === 0) {
      unionParent(parent, from, to);
    } else {
      findParent(parent, from) === findParent(parent, to)
        ? console.log("YES")
        : console.log("NO");
    }
  }
};

const graph = [
  [0, 1, 3],
  [1, 1, 7],
  [0, 7, 6],
  [1, 7, 1],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1],
];

solution(7, 8, graph);
