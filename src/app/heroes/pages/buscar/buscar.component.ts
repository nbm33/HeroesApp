import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];

  constructor(private heroesSerivice: HeroesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.heroesSerivice.getBusqueda(this.termino).subscribe(heroes => {this.heroes = heroes})
  }

}
