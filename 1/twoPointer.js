const solution = (m, arr) => {
  let sum = 0;
  let result = 0;
  let end = 0;

  arr.forEach((start) => {
    while (sum < m && end < arr.length) {
      sum += arr[end];
      end += 1;
    }

    if (sum === m) result += 1;

    sum -= start;
  });

  return result;
};

console.log(solution(5, [1, 2, 3, 2, 5]));
// 3
