const combination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
};

const solution = (arr, n) => {
  return combination(arr, n);
};

console.log(solution([0, 1, 7], 2));
// [ [ 0, 1 ], [ 0, 7 ], [ 1, 7 ] ]
