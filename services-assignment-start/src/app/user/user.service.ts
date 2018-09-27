import { Injectable } from '@angular/core';
import {CounterService} from "../shared/counter.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  setUserState(id: number, state: string) {
    let removalArr: any[];
    let insertArr: any[];

    if (state === 'active') {
      removalArr = this.inactiveUsers;
      insertArr = this.activeUsers;
      this.counterService.activeCount++;
    }
    else if (state === 'inactive') {
      removalArr = this.activeUsers;
      insertArr = this.inactiveUsers;
      this.counterService.inactiveCount++;
    }

    const removedItem = removalArr.splice(id, 1)[0];
    insertArr.push(removedItem);
  }
}
