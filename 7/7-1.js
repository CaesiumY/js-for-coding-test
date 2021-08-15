const solution = (n, target, arr) => {
  for (let i in arr) {
    if (arr[i] === target) {
      return parseInt(i) + 1;
    }
  }
};
console.log(
  solution(5, "Dongbin", ["Hanul", "Jonggu", "Dongbin", "Taeil", "Sangwook"])
);
