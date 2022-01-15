const solution = (n, arr, start) => {
  const graph = Array.from(Array(n + 1), () => []);
  const distance = Array(n + 1).fill(Infinity);
  const heap = [];

  arr.forEach(([a, b, c]) => {
    graph[a].push([b, c]);
    // 양방향일때
    // graph[b].push([a, c]);
  });

  heap.push([start, 0]);
  distance[start] = 0;

  while (heap.length) {
    heap.sort((a, b) => a[1] - b[1]);

    const [b, c] = heap.shift();
    if (distance[b] < c) continue;

    graph[b].forEach(([to, weight]) => {
      const cost = distance[b] + weight;
      if (distance[to] > cost) {
        distance[to] = cost;
        // to는 방향을, weight는 가중치를 위해
        heap.push([to, weight]);
      }
    });
  }

  console.log(distance);
  return distance;
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

solution(6, graph, 1);
