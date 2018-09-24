import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Test Server', content: 'Just a test!'}];

  onServerAdded(server:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: server.serverName,
      content: server.serverContent
    });
  }

  onBlueprintAdded(server:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.serverName,
      content: server.serverContent
    });
  }
}
