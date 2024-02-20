/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  function createAdjacencyMatrix() {
    const graph = {};
    for (const [a, b] of edges) {
      if (graph[a]) {
        graph[a].push(b);
      } else {
        graph[a] = [b];
      }
      if (graph[b]) {
        graph[b].push(a);
      } else {
        graph[b] = [a];
      }
    }
    return graph;
  }
  const graph = createAdjacencyMatrix();
  console.log(graph);
  const visited = {};
  const queue = [source];
  visited[source] = true;
  // Breadth first approach
  while (queue.length) {
    const top = queue.shift();
    if (top === destination) return true;
    graph[top].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return false;
};
// Recursive approach
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  function createAdjacencyList() {
    const graph = {};
    for (const edge of edges) {
      const [a, b] = edge;
      if (graph[a]) {
        graph[a].push(b);
      } else {
        graph[a] = [b];
      }
      if (graph[b]) {
        graph[b].push(a);
      } else {
        graph[b] = [a];
      }
    }
    return graph;
  }
  const graph = createAdjacencyList();
  const visited = {};
  function hasPath(src) {
    if (src === destination) return true;
    visited[src] = true;
    for (const neighbour of graph[src]) {
      if (!visited[neighbour]) {
        if (hasPath(neighbour)) return true;
      }
    }
    return false;
  }
  return hasPath(source);
};
console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
