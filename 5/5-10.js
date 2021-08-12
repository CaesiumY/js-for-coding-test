const solution = (n, m, k) => {
  let graph = [];
  k.split("\n").forEach((line) => {
    parsedLine = line.split("").map((letter) => parseInt(letter));
    graph.push(parsedLine);
  }); // 연속된 인풋 받기

  const dfs = (x, y) => {
    if (x <= -1 || x >= n || y <= -1 || y >= m) {
      return false;
    }
    if (graph[x][y] === 0) {
      graph[x][y] = 1;

      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }

    return false;
  };

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j)) result += 1;
    }
  }

  console.log(result);
};

const graph = `00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
11111111110011
11100011111111
11100011111111`;

solution(14, 15, graph);
