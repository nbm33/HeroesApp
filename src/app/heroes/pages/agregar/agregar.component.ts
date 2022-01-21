import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  
  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  heroe: Heroe = {
    superhero: "",
    publisher: Publisher.DCComics,
    alter_ego: "",
    first_appearance: "",
    characters: "",
    alt_img: ""
  }

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.heroe.superhero.trim().length === 0){
      return;
    }
    this.heroesService.agregarHeroe(this.heroe).subscribe(resp => {console.log("respuesta", resp);})

  }

}
