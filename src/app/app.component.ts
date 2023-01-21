import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrafficLight';
  color = 'red';
  red(){
    //let color = 'red';
    console.log("Red button is Working!");
  }
  yellow(){
    //let color = 'yellow';
    console.log("Yellow button is Working!");
  }
  green(){
    //let color = 'green';
    console.log("Green button is Working!");
  }
}
