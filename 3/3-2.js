// 큰 수의 법칙
// 입력 예시
// 5 8 3
// 2 4 5 4 6
// 출력 예시
// 46

// 단순

function simpleSolution(n, m, k, data) {
  let sortedData = data.sort((a, b) => a - b);
  let count = m;

  let first = sortedData[n - 1];
  let second = sortedData[n - 2];

  let result = 0;

  while (true) {
    for (let i = 0; i < k; i++) {
      if (count === 0) break;

      result += first;
      count -= 1;
    }

    if (count === 0) break;

    result += second;
    count -= 1;
  }

  console.log(result);
}

simpleSolution(5, 8, 3, [2, 4, 5, 4, 6]); // 6.17ms

// 더 나은 계산
function betterSolution(n, m, k, data) {
  let sortedData = data.sort((a, b) => a - b);

  let first = sortedData[n - 1];
  let second = sortedData[n - 2];

  let count = parseInt(m / (k + 1)) * k;
  count += m % (k + 1);

  let result = 0;

  result += count * first;
  result += (m - count) * second;

  console.log(result);
}

betterSolution(5, 8, 3, [2, 4, 5, 4, 6]); // 0.219ms
