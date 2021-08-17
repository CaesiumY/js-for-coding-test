const PriorityQueue = require("./PriorityQueue");

const solution = (node, line, start, arr) => {
  const graph = Array.from(Array(node + 1), () => Array());
  const distance = Array(node + 1).fill(Infinity);

  for (let i of arr) {
    const [from, to, weight] = i;
    graph[from].push([to, weight]);
  }

  const dijkstra = (start) => {
    const heap = new PriorityQueue();
    heap.enqueue(0, start);
    distance[start] = 0;
    while (!heap.isEmpty()) {
      const { priority: dist, value: now } = heap.dequeue();
      if (distance[now] < dist) continue;

      for (let j of graph[now]) {
        const cost = dist + j[1];

        if (cost < distance[j[0]]) {
          distance[j[0]] = cost;
          heap.enqueue(cost, j[0]);
        }
      }
    }
  };

  dijkstra(start);

  for (let i = 1; i < node + 1; i++) {
    distance[i] === Infinity
      ? console.log("Infinity")
      : console.log(distance[i]);
  }
};

const graph = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 3, 3],
  [2, 4, 2],
  [3, 2, 3],
  [3, 6, 5],
  [4, 3, 3],
  [4, 5, 1],
  [5, 3, 1],
  [5, 6, 2],
];

solution(6, 11, 1, graph);
