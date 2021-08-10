function simpleSolution(n, k) {
  console.time("simple");
  let [N, K] = [n, k];
  let result = 0;

  while (N >= K) {
    while (N % K != 0) {
      N -= 1;
      result += 1;
    }
    N = parseInt(N / K);
    result += 1;
  }

  while (N > 1) {
    N -= 1;
    result += 1;
  }

  console.log(result);
  console.timeEnd("simple");
}

simpleSolution(17, 4);
simpleSolution(25, 5);
simpleSolution(25, 3);
simpleSolution(10000000000, 37512); // 7.496ms

////////////////////////////////

function betterSolution(n, k) {
  console.time("better");
  let [N, K] = [n, k]; // 25, 3일 경우
  let result = 0;

  while (true) {
    const target = parseInt(N / K) * K; // target = 24, 나누어떨어지는 최대값 // target = 6 // target = 2
    result += N - target; // result = 1, 1을 모조리 빼버림 // result = 4 // result = 4

    N = target; // N = 24, 1을 모조리 빼고 남은 수 // N = 6 // N = 2

    if (N < K) break; // 24 < 3 === false // 6 < 3 === false // 3 < 2 === true -> break

    N = parseInt(N / K); // N = 8 // N = 2
    result += 1; // result = 2 // result = 5
  }

  result += N - 1; // result += 2 - 1, result = 6

  console.log(result);
  console.timeEnd("better");
}

betterSolution(17, 4);
betterSolution(25, 5);
betterSolution(25, 3);
betterSolution(10000000000, 37512); // 0.209ms
