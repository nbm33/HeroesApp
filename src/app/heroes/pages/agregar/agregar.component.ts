import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  
  @Input() climas: any = [];

  ciudad: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
