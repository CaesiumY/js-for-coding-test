const PriorityQueue = require("./PriorityQueue");

const solution = (n, m, start, arr) => {
  const graph = Array.from(Array(n + 1), () => Array());
  const distance = Array(n + 1).fill(Infinity);

  for (let i of arr) {
    graph[i[0]].push([i[1], i[2]]);
  }

  const dijkstra = (start) => {
    const heap = new PriorityQueue();

    heap.enqueue(0, start);
    distance[start] = 0;

    while (!heap.isEmpty()) {
      const { priority: dist, value: now } = heap.dequeue();

      if (distance[now] < dist) continue;

      for (let i of graph[now]) {
        const cost = dist + i[1];

        if (cost < distance[i[0]]) {
          distance[i[0]] = cost;
          heap.enqueue(cost, i[0]);
        }
      }
    }
  };

  dijkstra(start);

  let count = 0;
  let max = 0;

  for (let j of distance) {
    if (j !== Infinity) {
      count += 1;
      max = Math.max(max, j);
    }
  }

  console.log(count - 1, max);
};

const graph = [
  [1, 2, 4],
  [1, 3, 2],
];

solution(3, 2, 1, graph);
