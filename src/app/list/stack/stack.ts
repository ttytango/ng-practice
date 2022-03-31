class Node {
  constructor(
    public data = data,
  ) { }
}

export class Stack {
  constructor(
    public items: Node[] = []
  ) { }

  unshift = (data) => {
    let newNode = new Node(data);
    this.items.unshift(newNode);
  }

  shift = () => this.items.shift()

  get peek() { return this.items[0] }

  empty = () => { return (this.items.length = 0) }

  get isempty () { return this.items.length === 0 }

  get size () { return this.items.length }

}
