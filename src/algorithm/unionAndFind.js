const v = 5; // 노드의 수

const node = Array.from({ length: v + 1 }, (_, i) => i);

function getParent(n) {
  // node[n]을 부모(루트) 노드로 바꾸고 뒤 결과값을 반환
  // node[n]을 초기화 해줘야 하는거 주의
  if (n === node[n]) return n;
  return (node[n] = getParent(node[n]));
  // 이거와 동일
  // if(n === node([n])) return n;
  // node[n] = getParent(node[n])
  // return node[n]
}

function unionNode(a, b) {
  const nodeA = getParent(a);
  const nodeB = getParent(b);
  if (nodeA < nodeB) node[nodeB] = nodeA;
  else node[nodeA] = nodeB;
}

//find는 굳이 함수를 사용할 필요가 없다.

// if(getParent(a) !== getParent(b)){
//     '할거 하기'
//     unionNode(a, b)
// }
