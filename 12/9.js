const solution = (str) => {
  const max = Math.floor(str.length / 2);
  const answer = [];

  if (str.length <= 1) return str.length;

  for (let i = 1; i <= max; i++) {
    let cur = str.slice(0, i);
    let count = 1;
    let result = "";

    for (let j = i; j < str.length; j += i) {
      const next = str.slice(j, j + i);

      if (cur === next) count += 1;
      else {
        if (count === 1) count = "";
        result += count + cur;
        cur = next;
        count = 1;
      }
    }
    if (count === 1) count = "";
    result += count + cur;

    console.log(result);
    answer[i] = result.length;
  }

  console.log(Math.min(...answer.slice(1)));
};

solution("aabbaccc");
solution("ababcdcdababcdcd");
solution("abcabcdede");
solution("abcabcabcabcdededededede");
solution("xababcdcdababcdcd");
