import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css']
})
export class Assigment2Component implements OnInit {

  username: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  clearUsername() {
    this.username = ''
  }

}
