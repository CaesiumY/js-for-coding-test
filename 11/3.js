const solution = (n) => {
  const result0 = n.split(/0+/g).filter((i) => i.length != 0);
  const result1 = n.split(/1+/g).filter((i) => i.length != 0);

  console.log(Math.min(result0.length, result1.length));
};

solution("0001100");
solution("11100111");
