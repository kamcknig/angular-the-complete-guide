import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameTickInterval: number;
  gameTicks: number = 0;

  @Output()
  gameTick: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.gameTickInterval = setInterval(() => {
      this.gameTick.emit(this.gameTicks++);
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.gameTickInterval);
  }
}
