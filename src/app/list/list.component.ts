import { Component, OnInit } from '@angular/core';
import { LinkedList } from './linkedlist';
import { NgForm } from '@angular/forms';
import { LinkedListStates } from './list-states';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  list: LinkedList = new LinkedList();
  submitted: boolean = false;
  public jsonified: any;
  searchResult: string = '';
  printedList;

  printState = LinkedListStates.UNPRINTED;
  PRINTED = LinkedListStates.PRINTED;
  PREPEND = LinkedListStates.PREPEND;
  APPEND = LinkedListStates.APPEND;
  INSERT = LinkedListStates.INSERT;
  mode = this.APPEND;

  constructor() {
  }
  updateList() {
    this.jsonified = JSON.stringify(this.list, null, 2);
    this.onPrint();
  }

  ngOnInit(): void {
  }

  onPrint() {
    this.printState = LinkedListStates.PRINTED;
    this.printedList = this.list.pprintList();
  }

  onReverse() {
    this.list.reverse();
    this.updateList();
  }

  onSubmit(f: NgForm, mode: string) {
    switch (mode) {
      case this.INSERT:
        this.list.insert(f.value.node, f.value.position);
        break;
      case this.APPEND:
        this.list.append(f.value.node);
        break;
      case this.PREPEND:
        this.list.prepend(f.value.node);
        break;
    }
    this.updateList();
    this.submitted = true;
  }

  onDeleteAll() {
    this.list.deleteAll();
    this.updateList();
  }

  changeMode() {
    switch (this.mode) {
      case this.INSERT:
        return this.mode = this.APPEND
      case this.PREPEND:
        return this.mode = this.INSERT
      case this.APPEND:
        return this.mode = this.PREPEND
      default:
        break;
    }
  }

  onSearch(searchForm: NgForm) {
    return this.list.search(
      this.list.head,
      searchForm.value.search)
      ? this.searchResult = "Found!"
      : this.searchResult = "Not Found";
  }


  deleteNode(data: any) {
    this.list.removeNode(data)
    this.updateList();
  }
}
