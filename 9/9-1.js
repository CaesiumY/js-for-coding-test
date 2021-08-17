const solution = (node, line, start, arr) => {
  const graph = Array.from(Array(node + 1), () => Array());
  const visited = Array(node + 1).fill(false);
  const distance = Array(node + 1).fill(Infinity);

  for (let i of arr) {
    const [from, to, weight] = i;
    graph[from].push([to, weight]);
  }

  const getSmallestNode = () => {
    let min = Infinity;
    let index = 0;

    for (let i = 1; i < node + 1; i++) {
      if (distance[i] < min && !visited[i]) {
        min = distance[i];
        index = i;
      }
    }

    return index;
  };

  const dijkstra = (start) => {
    distance[start] = 0;
    visited[start] = true;

    for (let j of graph[start]) {
      distance[j[0]] = j[1];
    }

    for (let i = 0; i < node - 1; i++) {
      const now = getSmallestNode();
      visited[now] = true;

      for (let j of graph[now]) {
        const cost = distance[now] + j[1];

        if (cost < distance[j[0]]) distance[j[0]] = cost;
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
