const solution = (arr) =>
  arr.reduce((acc, cur) => {
    const getGCD = (A, B) => (B > 0 ? getGCD(B, A % B) : A); // 유클리드 호제법으로 최대공약수 구하기
    const getLCM = (A, B) => (A * B) / getGCD(A, B); // 최소공배수 구하기
    return getLCM(acc, cur);
  });

const answer = solution([2, 6, 8, 14]); // 168

console.log(answer);
