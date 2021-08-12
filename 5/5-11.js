const solution = (n, m, k) => {
  let graph = [];
  k.split("\n").forEach((line) => {
    parsedLine = line.split("").map((letter) => parseInt(letter));
    graph.push(parsedLine);
  }); // 연속된 인풋 받기

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const bfs = (x, y) => {
    let queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      let [cx, cy] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (graph[nx][ny] === 0) continue;

        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[cx][cy] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    return graph[n - 1][m - 1];
  };

  console.log(bfs(0, 0));
};

const graph = `101010
111111
000001
111111
111111`;

solution(5, 6, graph);
