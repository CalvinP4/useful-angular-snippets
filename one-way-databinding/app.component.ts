import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myVariable = 'app';

  constructor() {
    this.myVariable = '';
    setInterval(() => {
      this.myVariable = Math.random().toString()
    }, 500);
  }

  callMyFunction() {
    console.log("Funcion called!");
    
  }
}
