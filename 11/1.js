const solution = (n, arr) => {
  const people = arr.slice().sort((a, b) => b - a);
  const result = [];

  while (people.length) {
    let max = people.shift();
    let group = [max];

    for (let i = 0; i < max - 1; i++) {
      if (!people.length) break;
      group.push(people.shift());
    }

    if (group.length === max) result.push(group);
  }

  console.log(result.length);
};

solution(5, [2, 3, 1, 2, 2]);
