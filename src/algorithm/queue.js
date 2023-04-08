class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(val) {
    if (this.size() === 0) {
      this.store[0] = val;
    } else {
      this.store[++this.rear] = val;
    }
  }

  popleft() {
    let tmp = this.store[this.front];
    delete this.store[this.front];

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.front++;
    }

    return tmp;
  }
}
