const solution = (n, arr, m, x) => {
  const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
    }

    return null;
  };

  const sortedArr = arr.sort((a, b) => a - b);
  for (let i of x) {
    const result = binarySearch(sortedArr, i, 0, n - 1);
    result ? console.log("yes") : console.log("no");
  }
};

solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);
