


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






