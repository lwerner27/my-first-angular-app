import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})

export class Assignment3Component implements OnInit {
  displayText: boolean = true;
  buttonText: string = "Hide Details"
  clickCounter: number = 0;
  buttonClicks = [];
  makeLogsBlue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkCounter() {
    if (this.clickCounter > 4) {
      return "blue"
    }
  }

  toggleDetails() {
    if (this.displayText) {
      this.displayText = !this.displayText;
      this.buttonText = 'Display details'
      this.clickCounter++
      this.buttonClicks.push(this.clickCounter)
    } else {
      this.displayText = !this.displayText;
      this.buttonText = 'hide details'
      this.clickCounter++
      this.buttonClicks.push(this.clickCounter)
    }
  }

}
