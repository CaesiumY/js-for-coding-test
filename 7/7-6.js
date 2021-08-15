const solution = (n, arr, m, x) => {
  const count = Array(Math.max(...arr)).fill(0);

  for (let i of arr) {
    count[i] += 1;
  }

  for (let j of x) {
    count[j] === 0 ? console.log("no") : console.log("yes");
  }
};

solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);
