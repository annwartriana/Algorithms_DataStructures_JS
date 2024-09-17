class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // One way to go through the list
  // traverse(){
  //     let current = this.head;
  //     while(current){
  //         console.log(current.val);
  //         current = current.next;
  //     }
  // }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    if (this.length > 1) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    if (this.length > 1) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift();
    } else {
      let newNode = new Node(val);
      let prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop(index);
    } else if (index === 0) {
      this.shift(index);
    } else {
      let prevNode = this.get(index - 1);
      let removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return list;
  }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
