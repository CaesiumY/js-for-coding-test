const solution = (s) => {
  let result = 0;

  for (let i of s.split("").map((m) => parseInt(m, 10))) {
    if (result === 0 || [0, 1].includes(i)) result += i;
    else result *= i;
  }

  console.log(result);
};

solution("02984");
solution("567");
