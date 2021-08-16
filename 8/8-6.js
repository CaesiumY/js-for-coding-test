const solution = (n, arr) => {
  const d = Array(n + 1).fill(0);

  d[0] = arr[0];
  d[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < n; i++) {
    d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]);
  }

  console.log(d);
};

solution(4, [1, 3, 1, 5]);
