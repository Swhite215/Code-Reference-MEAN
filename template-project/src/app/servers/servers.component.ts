import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!"
  serverName: string = "";
  username: string = "";
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    console.log((<HTMLInputElement>event.target).id);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = "";
  }

}
