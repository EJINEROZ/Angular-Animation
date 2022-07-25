import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  animations: [
    trigger('changeDivDimension', [
      state('initial', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'green',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class SizeComponent implements OnInit {
  currentState = 'initial';

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
