const solution = (n, target, arr) => {
  const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
    }

    return null;
  };

  const result = binarySearch(arr, target, 0, n - 1);

  result ? console.log(result + 1) : console.log("NONE");
};

solution(10, 7, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
