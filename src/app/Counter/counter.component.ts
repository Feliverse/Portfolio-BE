import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {

  persona:Persona = {   
    name: 'Felipe Haybar Valenzuela', // string tipado
    age: 26 // number tipado
  }
}
