const solution = (arr) => {
  const table = arr.slice();
  const dp = Array(arr.length).fill(1);

  for (let i = 1; i < table.length; i++) {
    for (let j = 0; j < i; j++) {
      if (table[i] > table[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return dp;
};

console.log(solution([4, 2, 5, 8, 4, 11, 15]));
console.log(solution([5, 1, 6, 2, 7, 3, 8]));
console.log(solution([3, 5, 7, 9, 2, 1, 4, 8]));
// [
//   1, 1, 2, 3,
//   2, 4, 5
// ]
// [
//   1, 1, 2, 2,
//   3, 3, 4
// ]
// [
//   1, 2, 3, 4,
//   1, 1, 2, 4
// ]
// 배열의 아이템이 각각의 수열의 길이이므로,
// 배열에서 가장 큰 수가 가장 긴 수열이다.
// 따라서 5, 4, 4가 최장증가수열이다
