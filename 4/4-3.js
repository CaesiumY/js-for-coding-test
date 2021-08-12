function solution(pos) {
  const column = parseInt(pos[0].charCodeAt(0) - "a".charCodeAt(0) + 1);
  const row = parseInt(pos[1]);

  const moveTypes = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  let result = 0;

  for (let type of moveTypes) {
    let nextRow = row + type[0];
    let nextColumn = column + type[1];
    if (nextRow >= 1 && nextRow <= 8 && nextColumn >= 1 && nextColumn <= 8)
      result += 1;
  }

  console.log(result);
}

solution("a1");
