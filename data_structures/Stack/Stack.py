


class Stack:
    def __init__(self):
        self.stack = []

    def push(self, val):
        self.stack.append(val)

    def pop(self):
        if len(self.stack) > 0:
            self.stack.pop(-1)

    def peek(self):
        if len(self.stack) > 0:
            return self.stack[-1]
        

    def getData(self):
        if len(self.stack) > 0:
            print(self.stack)
        else:
            print("Stack is empty !")



def main():
    newStack = Stack()

    print("Pushing !")

    newStack.push(1)
    newStack.getData()
    newStack.push(2)
    newStack.getData()
    newStack.push(3)
    newStack.getData()
    newStack.push(4)
    newStack.getData()
    newStack.push(5)
    newStack.getData()

    print("Popping !")

    newStack.getData()
    newStack.pop()
    newStack.getData()
    newStack.pop()
    newStack.getData()
    newStack.pop()
    newStack.getData()
    newStack.pop()
    newStack.getData()
    newStack.pop()
    newStack.getData()


if __name__ == '__main__':
    main()
