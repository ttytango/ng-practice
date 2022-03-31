import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss'],
  animations: [
    trigger('stateAnimate', [
      state('state', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        style({ transform: 'translateX(-200%)' }),
        animate(200)
      ]),

    ])
  ]
})
export class NodesComponent implements OnInit {

  @Input() printedList: any = [];
  state: any = "state";

  constructor() {
  }

  ngOnInit(): void {
  }

}
