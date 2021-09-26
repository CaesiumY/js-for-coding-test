const solution = (n, m, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) result.push([i + 1, j + 1]);
    }
  }

  console.log(result.length);
};

solution(5, 3, [1, 3, 2, 3, 2]);
solution(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]);
