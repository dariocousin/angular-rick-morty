import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  typed;

  options = {
    strings: ['WUBBA LUBBA DUB-DUB', 'Rickticktavi bitch!', 'Uh ooooh. Somersault jump!','Rubber baby burger bumpers','Lick lick lick my balls'],
    typeSpeed: 100,
    backSpeed: 100,
    showCursor: false,
    cursorChar: '|',
    loop: true
};
  constructor() { }

  ngOnInit(): void {
    this.typed = new Typed('.typed-title', this.options);
  }

}
