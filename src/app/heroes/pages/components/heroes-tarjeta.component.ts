import { Component, Input } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html',
  styles: [
  ]
})
export class HeroesTarjetaComponent{

  @Input() heroe!: Heroe;

}
