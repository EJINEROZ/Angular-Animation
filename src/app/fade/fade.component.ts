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
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css'],
 animations: [
  trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ]),
]
})
export class FadeComponent implements OnInit {

 fadeItem : string[] =  [];
 listFadeOrder = 1;
 fadeIn(): void {
   const fadeitem = 'Fade In & Out ' + this.listFadeOrder;
   this.listFadeOrder++;
   this.fadeItem.push(fadeitem);
 }
 fadeOut(): void {
   this.fadeItem.length -= 1;
 }


  constructor() { }

  ngOnInit(): void {
  }

}
