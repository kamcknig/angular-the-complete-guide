import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameTicks: number[] = [];

  onGameTick($event: number) {
    this.gameTicks.push($event);
  }
}
