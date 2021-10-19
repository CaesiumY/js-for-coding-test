const solution = (n, k, locations, l, rotates) => {
  // n: 보드 크기, k: 사과 갯수, locations: 사과 좌표, rotates: 회전 명령
  const board = Array.from(Array(n), () => Array(n).fill(0));
  locations.forEach(([row, col]) => (board[row - 1][col - 1] = 1));

  let count = 0;
  let snake = [0, 0];
  let route = [[...snake]];
  let direction = 2;
  let next = 0;
  const dx = [0, -1, 0, 1]; // L U R D
  const dy = [-1, 0, 1, 0];
  const myRotates = rotates.slice();

  const turn = (direction, order) =>
    order === "L" ? (direction - 1) % 4 : (direction + 1) % 4;

  board[snake[0]][snake[1]] = 2;

  const isSnakeAlive = (x, y) =>
    x >= 0 && x < n && y >= 0 && y < n && board[x][y] !== 2;

  while (1) {
    const [nextX, nextY] = [snake[0] + dx[direction], snake[1] + dy[direction]];
    if (isSnakeAlive(nextX, nextY)) {
      if (board[nextX][nextY] === 0) {
        board[nextX][nextY] = 2;
        route.push([nextX, nextY]);
        const [prevX, prevY] = route.shift();
        board[prevX][prevY] = 0;
      }
      if (board[nextX][nextY] === 1) {
        board[nextX][nextY] = 2;
        route.push([nextX, nextY]);
      }
    } else {
      count += 1;
      break;
    }

    [snake[0], snake[1]] = [nextX, nextY];
    count += 1;
    if (myRotates.length > 0 && count === myRotates[0][0]) {
      const [_, order] = myRotates.shift();
      direction = turn(direction, order);
    }
  }

  console.log(count);
};

solution(
  6,
  3,
  [
    [3, 4],
    [2, 5],
    [5, 3],
  ],
  3,
  [
    [3, "D"],
    [15, "L"],
    [17, "D"],
  ]
);
solution(
  10,
  4,
  [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ],
  4,
  [
    [8, "D"],
    [10, "D"],
    [11, "D"],
    [13, "L"],
  ]
);
solution(
  10,
  5,
  [
    [1, 5],
    [1, 3],
    [1, 2],
    [1, 6],
    [1, 7],
  ],
  4,
  [
    [8, "D"],
    [10, "D"],
    [11, "D"],
    [13, "L"],
  ]
);
