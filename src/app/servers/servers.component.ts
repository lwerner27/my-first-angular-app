import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  newServerName: string = "";
  serverCreationStatus: string = "No server was created.";
  serverCreated: boolean = false;
  servers = ['TestServer01', 'TestServer02']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.newServerName);
    this.serverCreationStatus = 'A new server was ceated with the name: ' + this.newServerName;
  }

  // We don't necessarily need this method anymore because in our template we are using 2 way data binding
  onUpdateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;

  }

}
