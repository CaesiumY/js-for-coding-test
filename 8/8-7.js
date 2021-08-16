const solution = (n) => {
  const d = Array(n + 1).fill(0);

  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i < n + 1; i++) {
    d[i] = (d[i - 1] + d[i - 2] * 2) % 796796;
  }

  console.log(d[n]);
};

solution(3);
