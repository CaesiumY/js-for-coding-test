const solution = () => {
  const d = Array(100).fill(0);

  const fibo = (x) => {
    if (x === 1 || x === 2) {
      return 1;
    }

    if (d[x] !== 0) return d[x];

    d[x] = fibo(x - 1) + fibo(x - 2);

    return d[x];
  };

  console.log(fibo(99));
};

solution();
