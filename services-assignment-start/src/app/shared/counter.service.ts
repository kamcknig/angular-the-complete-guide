import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveCount: number = 0;
  activeCount: number = 0;

  constructor() { }
}
