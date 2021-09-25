const solution = (n, arr) => {
  let result = 1;
  let sortedArr = arr.sort((a, b) => a - b);

  for (let i of sortedArr) {
    if (result < i) break;
    result += i;
  }

  console.log(result);
};

solution(5, [3, 2, 1, 1, 9]);
solution(3, [3, 5, 7]);
