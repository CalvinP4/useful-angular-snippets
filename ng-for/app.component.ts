import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = [
    {
      id: 1,
      name: 'Calvin',
      online: true
    },
    {
      id: 2,
      name:'ABC',
      online: false,
    },
    {
      id: 3,
      name: 'XYZ',
      online: true,
    }
  ];
}
