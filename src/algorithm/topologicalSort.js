// 위상정렬은 비순환 방향 그래프(Directed Acyclic Graph)에서 정점을 선형 정렬한 것.

// 인접 차수(in degree)와 bfs 사용 (dfs도 쓸 수 있지만 주로 bfs 활용)

// 그래프, 큐, 인접 차수 필요

// 1. 인접 차수가 0인 요소는 방문한 것으로 간주하고 큐에 추가
// 2. 큐에서 요소를 꺼내서(queue.shift()) 결과값에 추가
// 3. 큐에서 꺼낸 요소의 정점(graph[cur])에 인접한 정점(next)의 인접 차수(inDegree[next]) 1 빼기
// 4. 인접 차수 요소의 값이 0이 되면 큐에 넣기
// 5. 위 과정 반복 후 결과 배열의 길이와 노드 길이 비교후 다르면 사이클 발생 한것

// example
// 1이 4보다 우선이어야 하고 4가 3보다 우선이어야 한다는 뜻
// 1 -> 4 -> 3
// 6 -> 2 -> 5 -> 4
// 2 -> 3

const result = [];

const graph = [[], [4], [5, 3], [], [3], [4], [2]];

const queue = [];

const inDegree = [0, 0, 1, 2, 2, 1, 0];

for (let i = 1; i < inDegree.length; i++) {
  if (inDegree[i] === 0) queue.push(i);
}

while (queue.length) {
  const cur = queue.shift();

  // 이미 queue에 있는 요소들은 인접 차수가 0 처리된 곳이라서
  // 따로 방문처리 하지않아도 바로 결과값에 넣으면 된다.
  // + 우선순위큐를 사용해 위상정렬을 사용하는 경우도 많다.
  result.push(cur);

  if (graph[cur].length) {
    for (const next of graph[cur]) {
      // 인접 정점을 갔다는 뜻이므로
      // 인접 정점의 인접 차수를 먼저 -1 해줘야 한다.
      // 인접 정점이 0, 즉 자기보다 우선하는 것들이 없을때 queue에 넣어야한다.
      if (--inDegree[next] === 0) queue.push(next);
    }
  }
}

// if(result.length === n) return result
// else cycle graph
