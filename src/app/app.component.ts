import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputText = 'text';
  user = {
    name: 'Truong',
    age: 25,
  };

  handler($event) {
    console.log('1',$event);
  }
}
