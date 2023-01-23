import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrafficLight';
  color1 = 'black';
  color2 = 'black';
  color3 = 'black';
  red() {
    this.color1 = 'red';
    this.color2 = 'black';
    this.color3 = 'black';
    console.log("Red button is Working!");
  }
  yellow() {
    this.color1 = 'black';
    this.color2 = 'yellow';
    this.color3 = 'black';
    console.log("Yellow button is Working!");
  }
  green() {
    this.color1 = 'black';
    this.color2 = 'black';
    this.color3 = 'green';
    console.log("Green button is Working!");
  }
}
