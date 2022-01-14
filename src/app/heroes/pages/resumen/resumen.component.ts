import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  
  celcius: number = 0;
  farenhait: number = 0;

  climas: any = [
    {
      "ciudad": "Bogota",
      "altura": "2600 msnm",
      "temperatura": "18ºC"
    },
    {
      "ciudad": "Medellin",
      "altura": "2100 msnm",
      "temperatura": "23ºC"
    },
    {
      "ciudad": "Santa Marta",
      "altura": "0 msnm",
      "temperatura": "27ºC"
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  calcularCelcius(){
    let sum1 = Number(this.celcius) + 3;
    this.farenhait = sum1;
  }

  clcularFarenhait(){
    let sum2 = Number(this.farenhait) + 3;
    this.celcius = sum2;
  }

  imprimir(){
    console.log(this.celcius);
    console.log(this.farenhait);
  }
}
