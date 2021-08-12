const solution = () => {
  const bfs = (graph, start, visited) => {
    visited[start] = true;
    let queue = [start];

    while (queue.length > 0) {
      const v = queue.shift();
      console.log(v);

      for (let i of graph[v]) {
        if (!visited[i]) {
          queue.push(i);
          visited[i] = true; // 재귀로 불러오지 않으니 여기서 대신 해줌
        }
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

  bfs(graph, 1, visited);
};

solution();
