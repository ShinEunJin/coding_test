class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

class MinHeap extends Heap {
  push(val) {
    this.heap.push(val);

    let curIdx = this.heap.length - 1;
    let parIdx = this.getParentIdx(curIdx);

    while (curIdx > 0 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = this.getParentIdx(curIdx);
    }
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let curIdx = 0;
    let leftChildIdx = this.getLeftChildIdx(curIdx);
    let rightChildIdx = this.getRightChildIdx(curIdx);

    while (true) {
      let nextIdx = curIdx;

      if (
        this.heap[leftChildIdx] &&
        this.heap[leftChildIdx] < this.heap[nextIdx]
      ) {
        nextIdx = leftChildIdx;
      }

      if (
        this.heap[rightChildIdx] &&
        this.heap[rightChildIdx] < this.heap[nextIdx]
      ) {
        nextIdx = rightChildIdx;
      }

      if (nextIdx === curIdx) {
        break;
      }

      this.swap(nextIdx, curIdx);
      curIdx = nextIdx;
      leftChildIdx = this.getLeftChildIdx(curIdx);
      rightChildIdx = this.getRightChildIdx(curIdx);
    }

    return min;
  }
}
