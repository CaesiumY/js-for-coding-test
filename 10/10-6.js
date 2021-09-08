const solution = (nodes, lines, graph) => {
  const indegree = Array(nodes + 1).fill(0);
  const list = Array.from(Array(nodes + 1), () => Array(0));

  for (let [from, to] of graph) {
    list[from].push(to);
    indegree[to] += 1;
  }

  const result = [];
  const queue = [];

  for (let i = 1; i < nodes + 1; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const now = queue.shift();
    result.push(now);

    for (let j of list[now]) {
      indegree[j] -= 1;

      if (indegree[j] === 0) {
        queue.push(j);
      }
    }
  }

  console.log(result);
};

const graph = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 7],
  [5, 6],
  [6, 4],
];

solution(7, 8, graph);
