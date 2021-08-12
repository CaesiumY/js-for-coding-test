function solution(h) {
  let count = 0;

  for (let i = 0; i <= h; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (`${i}${j}${k}`.includes("3")) count += 1;
      }
    }
  }

  console.log(count);
}

solution(5);
