let n = 1260
let count = 0

coinTypes = [500, 100, 50, 10]

for (coin of coinTypes) {
  count += (Math.floor(n / coin))
  n = n % coin
}

console.log(count)