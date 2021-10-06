const PriorityQueue = require("../9/PriorityQueue");

const solution = (food_times, k) => {
  if (food_times.reduce((a, b) => a + b) <= k) return -1;

  let length = food_times.length;
  let sum = 0;
  let prev = 0;

  const q = new PriorityQueue();
  for (let i in food_times) {
    q.enqueue(food_times[i], parseInt(i, 10) + 1);
  }
  while (sum + (q.getRoot()["priority"] - prev) * length <= k) {
    const now = q.dequeue();
    console.log(now);
    sum += (now["priority"] - prev) * length;
    length -= 1;
    prev = now["priority"];
  }
  let answer = q.heap.sort((a, b) => a["value"] - b["value"]);
  return answer[(k - sum) % length]["value"];
};

console.log(solution([3, 1, 2], 5));
console.log(solution([3, 4, 5], 7));
console.log(solution([3, 4, 5, 1, 1], 7));

console.log(solution([2, 2, 2], 6));
console.log(solution([2, 2, 1], 6));
