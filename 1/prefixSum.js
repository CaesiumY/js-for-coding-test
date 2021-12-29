const solution = (left, right, arr) => {
  const table = [0];
  let sum = 0;

  arr.forEach((value) => {
    sum += value;
    table.push(sum);
  });

  return table[right] - table[left - 1];
};

console.log(solution(3, 4, [10, 20, 30, 40, 50]));
// [ 0, 10, 30, 60, 100, 150 ], 70
