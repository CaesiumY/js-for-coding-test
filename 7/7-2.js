const solution = (n, target, arr) => {
  const binarySearch = (arr, target, start, end) => {
    if (start > end) return;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target)
      return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, mid + 1, end);
  };

  const result = binarySearch(arr, target, 0, n - 1);

  result ? console.log(result + 1) : console.log("NONE");
};

solution(10, 7, [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
