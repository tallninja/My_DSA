


class Queue {
  constructor() {
    this.queue = [];
  }

  add(val) {
    this.queue.unshift(val);
  }

  remove() {
    if (this.queue.length !== 0) {
      this.queue.pop();
    } else {
      console.log("Queue is empty !")
    }
  }

  peek() { // returns the next element in the queue
    return this.queue[this.queue.length - 1];
  }

  getData() {
    return this.queue;
  }
}

const newQueue = new Queue()

console.log("Enqueueing !")
console.log(newQueue.getData())
newQueue.add(23)
console.log(newQueue.getData())
newQueue.add(2)
console.log(newQueue.getData())
newQueue.add(45)
console.log(newQueue.getData())
newQueue.add(7)
console.log(newQueue.getData())
newQueue.add(0)
console.log(newQueue.getData())
newQueue.add(5)
console.log(newQueue.getData())

console.log("Dequeueing data !")
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()
console.log(newQueue.getData())
newQueue.remove()



function weave (queue1, queue2) {

  let q = new Queue()

  while (queue1.peek() || queue2.peek()) {
    if(queue1.peek()){
      q.add(queue1.remove())
    }
    if(queue2.peek()){
      q.add(queue2.remove())
    }
  }

  return q.getData()
}


