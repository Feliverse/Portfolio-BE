import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  persona = {   
    name: 'Felipe Haybar Valenzuela', // string tipado
    age: 26 // number tipado
  }
}
