export class Node {
  constructor(
    public data: any,
    public next = null
  ) { }
}

export class LinkedList {
  node: Node;
  constructor(
    public head = null,
    public nodeCount: number = 0
  ) {
  }
  prepend(data: any) {
    let newNode = new Node(data);
    if (this.nodeCount === 0) {
      this.head = newNode;
      this.nodeCount++
      return;
    }
    if (this.nodeCount === 1) {
      let tempNode = this.head;
      this.head = newNode;
      this.head.next = tempNode;
      this.nodeCount++
      return;
    }
    let tempNode = this.head;
    this.head = newNode;
    this.head.next = tempNode;
    this.nodeCount++
    return;
  }
  public append(data: any) {
    if (this.nodeCount === 0) {
      return this.prepend(data)
    }
    let newNode = new Node(data);
    let currentNode = this.head;
    this.nodeCount++;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return ;
  }

  public insert(data: any, position: number) {
    if (position > this.nodeCount) {
      return console.log("list not long enough")
    }
    if (this.nodeCount === 0 || position === 0) {
      return this.prepend(data)
    }
    this.nodeCount++;
    let newNode = new Node(data);
    let currentNode = this.head;
    let counter = 1;
    while (counter < position) {
      currentNode = currentNode.next;
      counter++
    }
    let tempNode = currentNode.next
    currentNode.next = newNode;
    newNode.next = tempNode;
    return;
  }
  public reverse() {
    let prev = null
    let currentNode = this.head
    do {
      let next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    } while (currentNode)
    this.head = prev
  }

  public search(current: Node = this.head, val) {
    let currentNode = current;
    if (currentNode == null) {
      console.log("not found")
      return
    }
    if (currentNode.data == val) {
      console.log("found");
      return true;
    }
    return this.search(currentNode.next, val)
  }

  public pprintList() {
    let currentNode = this.head;
    let arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }


  public printList() {
    let currentNode = this.head;
    let str;
    while (currentNode) {
      str += currentNode.data + " -> ";
      currentNode = currentNode.next;
    }
    return str;
  }

}
