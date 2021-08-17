const solution = (n, m, arr) => {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let i in graph) graph[i][i] = 0;

  for (let j of arr) {
    const [from, to, weight] = j;
    graph[from][to] = weight;
  }
  console.log(graph);
  for (let k = 1; k < n + 1; k++) {
    for (let a = 1; a < n + 1; a++) {
      for (let b = 1; b < n + 1; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
      }
    }
  }

  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] === Infinity
        ? console.log("Infinity")
        : console.log(graph[a][b]);
    }
  }

  console.log(graph.slice(1));
};

const graph = [
  [1, 2, 4],
  [1, 4, 6],
  [2, 1, 3],
  [2, 3, 7],
  [3, 1, 5],
  [3, 4, 4],
  [4, 3, 2],
];

solution(4, 7, graph);
