const solution = () => {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  const quickSort = (array) => {
    if (array.length <= 1) return array;

    const pivot = array[0];
    const tail = array.slice(1);
    const leftSide = tail.filter((item) => item <= pivot);
    const rightSide = tail.filter((item) => item > pivot);

    return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
  };

  console.log(quickSort(array));
};

solution();
