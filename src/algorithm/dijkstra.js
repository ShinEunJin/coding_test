// 두가지 방법이 존재.
// 1. 선형 자료구조를 이용한 선형 탐색을 사용하는 방법
// 2. 최소 힙을 사용한 비선형 탐색 방법
// 위 1번은 간선의 범위가 1만 개가 되어도 느려지고 10만개면 시간 초과가 난다.
// 그래서 웬만하면 2번 방법이 길어도 쓰기 좋다.

// 한 노드에서 다른 노드들 까지의 최단 거리
// 큐를 사용해도 되나 노드, 간선이 많아 질수록 우선순위큐가 좋다.
// O(ElogV) (V은 노드의 개수, E는 간선의 수) 이차원배열 사용시 O(V^2)

// 그래프를 따라 최소힙에 distance 를 갱신하면서(dp) 최단 거리를 저장한다.
// 다익스트라는 그림을 그려보면 직관적으로 알 수 있기 때문에 패스.

const minHeap = [];

const graph = [];

const distance = [];

minHeap.push({ node: "시작노드", cost: 0 });

distance["시작노드"] = 0;

while (minHeap.size()) {
  const { node, cost } = minHeap.pop();

  if (distance[node] < cost) continue;

  for (const next of graph[node]) {
    const nextNode = next.node;
    const nextCost = next.cost;
    if (distance[nextNode] > nextCost + cost) {
      distance[nextNode] = nextCost + cost;
      minHeap.push({ node: nextNode, cost: nextCost + cost });
    }
  }
}
