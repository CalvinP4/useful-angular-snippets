import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  myName = "Calvin";
  bitwiseOr = 2 | 5; // this cannot be done in the template file
  i = 0;

  constructor() { }

  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`);
  }

  ngOnInit(): void {
  }

}
