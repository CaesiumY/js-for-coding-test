const solution = (food_times, k) => {
  if (food_times.reduce((a, b) => a + b) <= k) return -1;

  let length = food_times.length;
  let sum = 0;
  let prev = 0;
  const foodTimes = food_times
    .map((f, i) => [f, i + 1])
    .sort((a, b) => a[0] - b[0]);

  while (sum + (foodTimes[0][0] - prev) * length <= k) {
    const now = foodTimes.shift();
    sum += (now[0] - prev) * length;
    length -= 1;
    prev = now[0];
  }
  let answer = foodTimes.sort((a, b) => a[1] - b[1]);
  return answer[(k - sum) % length][1];
};

console.log(solution([3, 1, 2], 5));
console.log(solution([3, 4, 5], 7));
console.log(solution([3, 4, 5, 1, 1], 7));

console.log(solution([2, 2, 2], 6));
console.log(solution([2, 2, 1], 6));
