import { Component, OnInit } from '@angular/core';
import { BinarySearchTree, BSTNode } from '../bstree';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-binarysearchtree',
  templateUrl: './binarysearchtree.component.html',
  styleUrls: ['./binarysearchtree.component.scss']
})
export class BinarysearchtreeComponent implements OnInit {
  tree: BinarySearchTree;
  public jsonified;
  public treeHeight: number;
  public queue = [];
  constructor() { }

  ngOnInit(): void {
    this.tree = new BinarySearchTree();
    this.updateTree();
  }

  updateTree() {
    this.jsonified = JSON.stringify(this.traverse(this.tree.root), null, 2);
    this.treeHeight = this.tree.height(this.tree.root);
    this.print();
  }

  printLevelOrder() {
    var h = this.tree.height(this.tree.root);
    var i;
    for (i = 1; i <= h; i++){
      this.printCurrentLevel(this.tree.root, i)
    }
    return this.queue
  }

  printCurrentLevel(root , level) {
    if (root == null)
      return;
    if (level == 1)
      this.queue.push(root.value);
    else if (level > 1) {
      this.printCurrentLevel(root.left, level - 1);
      this.printCurrentLevel(root.right, level - 1);
    }
  }

  traverse(node) {
    const tree = { value: node.value,
      left: undefined,
      right: undefined
    };
    tree.left = node.left === null ? null : this.traverse(node.left);
    tree.right = node.right === null ? null : this.traverse(node.right);
    return tree;
  }



    onSubmit(f: NgForm) {
    this.tree.insert(f.value.node)
    this.updateTree();
  }

  onSearch(searchForm: NgForm) {
    console.log(searchForm.value.search)
  }

  print() {
    this.queue = [];
    this.printLevelOrder()
  }
}
