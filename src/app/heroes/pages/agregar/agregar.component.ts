import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
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

  constructor(  private heroesService: HeroesService, 
                private activatedRoute: ActivatedRoute, 
                private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( switchMap(({id}) => this.heroesService.getHeroePorId(id)))
      .subscribe( resp => {this.heroe = resp})
  }

  guardar(){
    if (this.heroe.superhero.trim().length === 0){
      return;
    }
    if ( this.heroe.id ){
      //Actualizar Heroe
      this.heroesService.actualizarHeroe(this.heroe).subscribe(resp => {console.log("Actualizando", resp);})
    } else {
      //crear nuevo heroe
      this.heroesService.agregarHeroe(this.heroe)
        .subscribe(resp => {this.router.navigate(['/heroes/editar', resp.id])})
    }


    
  }



}
