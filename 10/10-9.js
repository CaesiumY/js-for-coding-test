const solution = (n, graph) => {
  const indegree = Array(n + 1).fill(0);
  const list = Array.from(Array(n + 1), () => Array());
  const time = Array(n + 1).fill(0);

  for (let i = 1; i < n + 1; i++) {
    const [cost, ...data] = graph[i - 1];
    time[i] += cost;

    for (let node of data) {
      if (node === -1) continue;

      indegree[i] += 1;
      list[node].push(i);
    }
  }

  const queue = [];
  const result = time.slice();

  for (let j = 1; j < n + 1; j++) {
    if (indegree[j] === 0) queue.push(j);
  }

  while (queue.length) {
    const now = queue.shift();
    for (let k of list[now]) {
      result[k] = Math.max(result[k], time[k] + result[now]);
      indegree[k] -= 1;
      if (indegree[k] === 0) queue.push(k);
    }
  }

  console.log(result.slice(1));
};

const graph = [
  [10, -1],
  [10, 1, -1],
  [4, 1, -1],
  [4, 3, 1, -1],
  [3, 3, -1],
];

solution(5, graph);
