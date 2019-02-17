import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
   serverId  = '10';
   serverStatus = 'offline'; 
   logItem = [];
   getServerStatus(){
       return this.serverStatus;
   }

   toggleButton(event){
    this.logItem.push(new Date());
   }

   getColor(country) {
    switch (country) {
      case "UK":
        return "green";
      case "USA":
        return "blue";
      case "HK":
        return "red";
    }
  }

  people: any[] = [
    {
      name: "Douglas  Pace",
      country: "UK"
    },
    {
      name: "Mcleod  Mueller",
      country: "USA"
    },
    {
      name: "Day  Meyers",
      country: "HK"
    },
    {
      name: "Aguirre  Ellis",
      country: "UK"
    },
    {
      name: "Cook  Tyson",
      country: "USA"
    }
  ];
}