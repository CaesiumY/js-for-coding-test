function solution(n, plans) {
  let [x, y] = [1, 1];

  dx = [0, 0, -1, 1];
  dy = [-1, 1, 0, 0];
  moveTypes = ["L", "R", "U", "D"];

  for (let plan of plans) {
    let nx;
    let ny;
    for (i in moveTypes) {
      if (plan === moveTypes[i]) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    }
    if (nx > n || nx < 1 || ny > n || ny < 1) continue;

    [x, y] = [nx, ny];
  }

  console.log(x, y);
}

solution(5, ["R", "R", "R", "U", "D", "D"]);
