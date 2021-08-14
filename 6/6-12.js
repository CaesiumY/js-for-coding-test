const solution = (n, k, a, b) => {
  const sortedA = a.sort((a, b) => a - b);
  const sortedB = b.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    if (sortedA[i] < sortedB[i]) {
      [sortedA[i], sortedB[i]] = [sortedB[i], sortedA[i]];
    } else break;
  }

  console.log(sortedA.reduce((a, b) => a + b));
};

solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]);
