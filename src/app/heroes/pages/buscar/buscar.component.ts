import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
    #tarjeta{
      justify-content: center;
      width: 30%;
    }
  `]
})
export class BuscarComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSeleccionado: Heroe | undefined;

  constructor(private heroesSerivice: HeroesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.heroesSerivice.getBusqueda(this.termino.trim()).subscribe(heroes => {this.heroes = heroes})
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    
    const heroe: Heroe = event.option.value
    this.termino = heroe.superhero
    this.heroesSerivice.getHeroePorId(heroe.id!).subscribe(resp => {this.heroeSeleccionado = resp});
    
  }
  
}
