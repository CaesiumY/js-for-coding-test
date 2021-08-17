class Heap {
  constructor() {
    this.heap = [];
  }

  dangerouslyGetHeap = () => this.heap; // NOTE: 테스트용입니다. 실제로는 있어선 안 됩니다.

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => parseInt((childIndex - 1) / 2);

  getRoot = () => this.heap[0];
  isEmpty = () => this.heap.length === 0;

  remove = () => {
    const root = this.getRoot();

    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    } else {
      this.heap = [];
    }

    return root;
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (lastInsertedNode.priority < this.heap[parentIndex].priority) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    this.heap[index] = lastInsertedNode;
  };

  heapifyDown = () => {
    const rootNode = this.getRoot();
    let index = 0;

    while (this.getLeftChildIndex(index) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      const smallestChildIndex =
        rightChildIndex < this.heap.length &&
        leftChildIndex.priority < rightChildIndex.priority
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallestChildIndex].priority <= rootNode.priority) {
        this.heap[index] = this.heap[smallestChildIndex];
        index = smallestChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  };
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => {
    this.heap.push({ priority, value });
    this.heapifyUp();
  };

  dequeue = () => this.remove();
}

module.exports = PriorityQueue;
