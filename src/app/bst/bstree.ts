interface TreeNode<T> {
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  value: T;
}

export class BSTNode implements TreeNode<any> {
  constructor(
    public value: number,
    public left = null,
    public right = null
  ) {
  }
}

export class BinarySearchTree {
  public root: any;
  constructor() {
    this.root = null;
  }

  insert(value: number): any {
    const newNode = new BSTNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value: number){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }

  invert(node) {
    if (!node) {
      return;
    }
    let tempNode = node
    this.invert(node.left);
    this.invert(node.right);
    tempNode = node.left
    node.left = node.right
    node.right = tempNode
  }

  height(root=this.root) {
    if (root == null)
      return 0;
    else {
      /* compute height of each subtree */
      let lheight = this.height(root.left);
      let rheight = this.height(root.right);

      /* use the larger one */
      if (lheight > rheight)
        return (lheight + 1);
      else
        return (rheight + 1);
    }
  }

  // printLevelOrder() {
  //   let h = this.height(this.root);
  //   let i;
  //   for (i = 1; i <= h; i++)
  //     this.printCurrentLevel(this.root, i);
  // }
  //
  // printCurrentLevel(root , level, ) {
  //   let queue = []
  //   let val;
  //
  //   if (root == null)
  //     return;
  //   if (level == 1){
  //     val  = root.value
  //   }
  //   else if (level > 1) {
  //     this.printCurrentLevel(root.left, level - 1);
  //     this.printCurrentLevel(root.right, level - 1);
  //   }
  // }
}

