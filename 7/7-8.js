const solution = (n, m, arr) => {
  let start = 0;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let total = 0;

    const mid = Math.floor((start + end) / 2);

    for (let i of arr) {
      if (i > mid) {
        total += i - mid;
      }
    }

    if (total < m) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }

  console.log(result);
};

solution(4, 6, [19, 15, 10, 17]);
