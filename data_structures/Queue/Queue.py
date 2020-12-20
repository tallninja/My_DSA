

class Queue:
    def __init__(self):
        self.queue = []

    def add(self, val):
        self.queue.append(val)

    def remove(self):
        if len(self.queue) == 0:
            print("Queue is Empty !")
        else:
            self.queue.pop(0)

    def getData(self):
        print(self.queue)


newQueue = Queue()

print("Enqueueing !")
newQueue.getData()
newQueue.add(4)
newQueue.getData()
newQueue.add(23)
newQueue.getData()
newQueue.add(7)
newQueue.getData()
newQueue.add(0)
newQueue.getData()
newQueue.add(11)
newQueue.getData()

print("Dequeueing !")
newQueue.getData()
newQueue.remove()
newQueue.getData()
newQueue.remove()
newQueue.getData()
newQueue.remove()
newQueue.getData()
newQueue.remove()
newQueue.getData()
newQueue.remove()
newQueue.getData()
newQueue.remove()



def weave(queue1, queue2):

    q = Queue()

    while queue1.peek() or queue2.peek():
        if queue1.peek():
            q.add(quque1.remove())
        if queue2.peek():
            q.add(queue2.remove())

    return q.getData()








