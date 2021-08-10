function solution(n, m, data) {
  let result = 0;

  data.forEach((line) => {
    const min = Math.min(...line);

    result = Math.max(result, min);
  });

  console.log(result);
}

solution(3, 3, [
  [3, 1, 2],
  [4, 1, 4],
  [2, 2, 2],
]);
solution(2, 4, [
  [7, 3, 1, 8],
  [3, 3, 3, 4],
]);
