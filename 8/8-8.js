const solution = (n, m, arr) => {
  const d = Array(m + 1).fill(Infinity);

  d[0] = 0;

  for (let i in arr) {
    for (let j = arr[i]; j < m + 1; j++) {
      d[j] = Math.min(d[j], d[j - arr[i]] + 1);
    }
  }

  d[m] === Infinity ? console.log(-1) : console.log(d[m]);
};

solution(2, 15, [2, 3]);
solution(3, 4, [3, 5, 7]);
