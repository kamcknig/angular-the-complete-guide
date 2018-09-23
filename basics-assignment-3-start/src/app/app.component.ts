import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = false;
  buttonClicks: string[] = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonClicks.push(new Date().toString());
    console.log(this.buttonClicks[this.buttonClicks.length - 1]);
  }
}
