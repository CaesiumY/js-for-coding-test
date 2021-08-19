const solution = (n, m, arr, x, k) => {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let i in graph) graph[i][i] = 0;

  for (let j of arr) {
    graph[j[0]][j[1]] = 1;
    graph[j[1]][j[0]] = 1;
  }

  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      for (let c = 1; c < n + 1; c++) {
        graph[b][c] = Math.min(graph[b][c], graph[b][a] + graph[a][c]);
      }
    }
  }
  console.log(graph);

  const distance = graph[1][k] + graph[k][x];
  distance >= Infinity ? console.log(-1) : console.log(distance);
};

const graph = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];

solution(5, 7, graph, 4, 5);
