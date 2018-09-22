import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test Server';

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 3000 );
  }

  onCreateServer = () => {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  };

  onUpdateServerName = event => {
    this.serverName = (<HTMLInputElement>event.target).value;
  };

  ngOnInit() {
  }

}
