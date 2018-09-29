import { Component } from '@angular/core';
import {ServersService} from "./servers.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  appName: Observable<any> = this.serversService.getAppName();

  constructor(private serversService: ServersService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onGet = () => {
    this.serversService.getServers()
      .subscribe(
        data => {
          this.servers = data;
        },
        error => {
          console.log(error);
        }
      )
  };

  onSaveServers() {
    this.serversService.storeServers(this.servers)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )
  }
}
