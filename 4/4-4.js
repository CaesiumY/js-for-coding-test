function solution(n, m, x, y, direction, map) {
  let d = Array.from(Array(5), () => Array(5).fill(0)); // 5x5의 이차원 배열 만들기
  let myDirection = direction;

  d[x][y] = 1;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const turnLeft = () => {
    myDirection -= 1;
    if (myDirection < 0) myDirection = 3;
  };

  let count = 1;
  let turnTime = 0;

  while (true) {
    turnLeft();
    let nx = x + dx[myDirection];
    let ny = y + dy[myDirection];
    if (d[nx][ny] === 0 && map[nx][ny] === 0) {
      d[nx][ny] = 1;
      x = nx;
      y = ny;
      count += 1;
      turnTime = 0;
      continue;
    } else turnTime += 1;

    if (turnTime === 4) {
      nx = x - dx[myDirection];
      ny = y - dy[myDirection];

      if (map[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else break;

      turnTime = 0;
    }
  }

  console.log(count);
}

solution(4, 4, 1, 1, 0, [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
]);
