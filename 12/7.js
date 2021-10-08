const solution = (score) => {
  const myScore = score.toString();
  const mid = Math.floor(myScore.length / 2);

  const firstHalf = myScore.slice(0, mid);
  const lastHalf = myScore.slice(mid);

  const sum = (s) => s.split("").reduce((a, b) => parseInt(a) + parseInt(b));

  sum(firstHalf) === sum(lastHalf)
    ? console.log("LUCKY")
    : console.log("READY");
};

solution(123402);
solution(7755);
