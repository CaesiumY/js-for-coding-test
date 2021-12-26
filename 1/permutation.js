const permutation = (arr, selectNum) => {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((val, index) => index !== idx);
    const permuArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuArr.map((v) => fixer + v);
    result.push(...combineFixer);
  });
  return result;
};

const solution = (arr, n) => {
  return permutation(arr, n);
};

console.log(solution([0, 1, 7], 2));
// [ '01', '07', '10', '17', '70', '71' ]
