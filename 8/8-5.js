const solution = (x) => {
  const d = Array(x + 1).fill(0);

  for (let i = 2; i < x + 1; i++) {
    d[i] = d[i - 1] + 1;

    for (let j of [2, 3, 5]) {
      if (i % j === 0) d[i] = Math.min(d[i], d[parseInt(i / j)] + 1);
    }
    // if (i % 2 === 0) d[i] = Math.min(d[i], d[parseInt(i / 2)] + 1);
    // if (i % 3 === 0) d[i] = Math.min(d[i], d[parseInt(i / 3)] + 1);
    // if (i % 5 === 0) d[i] = Math.min(d[i], d[parseInt(i / 5)] + 1);
  }

  console.log(d[x]);
};

solution(26);
