const solution = () => {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  const quickSort = (array, start, end) => {
    if (start >= end) return;

    const pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      while (left <= end && array[left] <= array[pivot]) {
        left += 1;
      }

      while (right > start && array[right] >= array[pivot]) {
        right -= 1;
      }

      if (left > right)
        [array[right], array[pivot]] = [array[pivot], array[right]];
      else [array[right], array[left]] = [array[left], array[right]];
    }

    quickSort(array, start, right - 1);
    quickSort(array, right + 1, end);
  };

  quickSort(array, 0, array.length - 1);

  console.log(array);
};

solution();
