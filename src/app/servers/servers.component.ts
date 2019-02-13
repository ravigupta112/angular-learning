import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>',
  /*template: `
  <app-server>

  </app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverText = 'server was not created!';
  serverName = "server";
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {
  }

  createServer(){
    this.serverText = 'Server created';
  }

  onUpdateServerName(event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
