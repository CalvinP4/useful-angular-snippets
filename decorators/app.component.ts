import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any) {
  // descriptor is the function being passed
  console.log(target, name, descriptor);
  
  // store reference to the original function
  const original = descriptor.value;

  // original()

  // descriptor.value = function () {
  //   console.log("This function has been hacked!");
    
  // }

  // when we override the descriptor this functions value is the one that is returned
  descriptor.value = function(...args: any) {
    console.log("Arguments ", args, " were passed in this fucntion");
    const result = original.apply(this, args);
    console.log("The result of the function is ", result);    
    return result;
  }

  return descriptor;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-to-angular';

  constructor() {
    console.log("We're inside the constructor ", this.simpleFunc(5));    
    
  }

  // an example of member decorator
  @log
  simpleFunc(a: number) {
    return a*a;
  }
}
