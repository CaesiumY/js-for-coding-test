const solution = (n, data) => {
  console.log(data.sort((a, b) => a[1] - b[1]));
};

solution(2, [
  ["홍길동", 95],
  ["이순신", 77],
]);
