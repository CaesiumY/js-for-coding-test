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

  const parent = Array.from(Array(nodes + 1), (_, i) => i);

  for (let [a, b] of graph) {
    unionParent(parent, a, b);
  }

  const sets = [];
  for (let j = 1; j < nodes + 1; j++) {
    sets.push(findParent(parent, j));
  }
  console.log("각 원소가 속한 집합", sets);
  console.log("부모 테이블", parent.slice(1));
};

const graph = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];

solution(6, 4, graph);
