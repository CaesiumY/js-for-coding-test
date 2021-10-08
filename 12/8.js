const solution = (s) => {
  let n = 0;
  let str = "";

  for (let i of s) {
    if (/\d+/.test(i)) n += parseInt(i, 10);
    else str += i;
  }

  str = str.split("").sort().join("");

  console.log(str + n);
};

solution("K1KA5CB7");
solution("AJKDLSI412K4JSJ9D");
