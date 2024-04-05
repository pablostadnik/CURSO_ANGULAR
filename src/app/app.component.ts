import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',


})
export class AppComponent {
  public title = 'Hola Mundo';
  public counter : number = 3;

  increaseBy( value: number ): void {

    this.counter += value;
  }

  resetcounter(  ): void {

    this.counter = 5;
  }
}
