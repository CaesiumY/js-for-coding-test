const solution = () => {
  const d = Array(100).fill(0);

  const fibo = (x) => {
    d[1] = 1;
    d[2] = 1;

    for (let i = 3; i < x + 1; i++) {
      d[i] = d[i - 1] + d[i - 2];
    }

    return d[x];
  };

  console.log(fibo(99));
};

solution();
