const solution = (key, lock) => {
  let tempKey = key.slice();
  const table = Array.from(Array(lock.length * 3), () =>
    Array(lock.length * 3).fill(0)
  );

  const rotate = (arr) =>
    arr[0].map((_, index) => arr.map((row) => row[index]).reverse());

  for (let i in lock) {
    for (let j in lock[i]) {
      table[lock.length + parseInt(i)][lock.length + parseInt(j)] = lock[i][j];
    }
  }

  for (let k = 0; k < 4; k++) {
    tempKey = rotate(tempKey);

    for (let row = 0; row < lock.length * 2; row++) {
      for (let col = 0; col < lock.length * 2; col++) {
        for (let x = 0; x < key.length; x++) {
          for (let y = 0; y < key.length; y++) {
            table[row + x][col + y] += tempKey[x][y];
          }
        }

        const sum = table
          .slice(lock.length, lock.length * 2)
          .map((t) => t.slice(lock.length, lock.length * 2))
          .flat()
          .every((a) => a === 1);

        if (sum) return true;

        for (let x = 0; x < key.length; x++) {
          for (let y = 0; y < key.length; y++) {
            table[row + x][col + y] -= tempKey[x][y];
          }
        }
      }
    }
  }

  return false;
};

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
console.log(
  solution(
    [
      [0, 1],
      [0, 0],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
);
