const solution = (n, arr, m, x) => {
  const arrSet = new Set(arr);

  for (let i of x) {
    arrSet.has(i) ? console.log("yes") : console.log("no");
  }
};

solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);
