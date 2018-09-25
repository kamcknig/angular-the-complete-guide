import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.setUserState(id, 'inactive');
  }
}
