


class Stack {
  constructor () {
    this.stack = [];
  }
  
  push (val) {
    this.stack.push(val);
  }

  pop (val) {
    if (this.stack.length > 0) {
       this.stack.pop();
    } else {
      return null;
    }
  }

  getData () {
    if (this.stack.length !== 0) {
      console.log(this.stack);
    } else {
      console.log("Stack is empty !");
    }
  }
}

let newStack = new Stack()

console.log("Pushing !");

newStack.push(1);
newStack.getData();
newStack.push(2);
newStack.getData();
newStack.push(3);
newStack.getData();
newStack.push(4);
newStack.getData();
newStack.push(5);
newStack.getData();

console.log("Popping !")

newStack.getData();
newStack.pop();
newStack.getData();
newStack.pop();
newStack.getData();
newStack.pop();
newStack.getData();
newStack.pop();
newStack.getData();
newStack.pop();
newStack.getData();
newStack.pop();

