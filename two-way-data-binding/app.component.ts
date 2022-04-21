import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'app';
  text2 = 'app';

  updateValue(e:any) {
    console.log(e.target.value);
    this.text = e.target.value;
  }
}
