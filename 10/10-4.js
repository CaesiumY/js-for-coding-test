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

  let isCycle = false;

  for (let [a, b] of graph) {
    if (findParent(parent, a) === findParent(parent, b)) {
      isCycle = true;
      break;
    } else {
      unionParent(parent, a, b);
    }
  }

  console.log(parent.slice(1));

  isCycle
    ? console.log("사이클이 발생했습니다.")
    : console.log("사이클이 발생하지 않았습니다.");
};

const graph = [
  [1, 2],
  [1, 3],
  [2, 3],
];

solution(3, 3, graph);
