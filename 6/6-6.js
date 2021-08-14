const solution = () => {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

  const count = Array(Math.max(...array) + 1).fill(0);

  for (let i in array) {
    count[array[i]] += 1;
  }

  for (let i in count) {
    for (let j = 0; j < count[i]; j++) {
      console.log(i);
    }
  }
};

solution();
