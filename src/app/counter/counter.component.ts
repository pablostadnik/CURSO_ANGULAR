import { Component } from "@angular/core";



@Component({
selector : 'app-counter',
template: `
<p>Contando {{ counter }} </p>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="resetcounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>

`
})
export class CounterComponent {

  public counter : number = 3;
  increaseBy( value: number ): void {

    this.counter += value;
  }

  resetcounter(  ): void {

    this.counter = 5;
  }

}
