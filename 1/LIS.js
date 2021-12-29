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
