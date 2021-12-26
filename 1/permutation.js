const permutation = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuArr = permutation(restArr, selectNum - 1);
    const permuFix = permuArr.map((v) => [fixed, ...v]);
    result.push(...permuFix);
  });
  return result;
};

const solution = (arr, n) => {
  return permutation(arr, n);
};

console.log(solution([0, 1, 7], 3));
// [ [ 0, 1 ], [ 0, 7 ], [ 1, 0 ], [ 1, 7 ], [ 7, 0 ], [ 7, 1 ] ]
