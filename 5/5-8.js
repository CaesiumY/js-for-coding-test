const solution = () => {
  const dfs = (graph, v, visited) => {
    visited[v] = true;

    console.log(v);

    for (let i of graph[v]) {
      if (!visited[i]) {
        dfs(graph, i, visited);
      }
    }
  };

  const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];

  let visited = Array(9).fill(false); // false가 9개인 배열 생성

  dfs(graph, 1, visited);
};

solution();
