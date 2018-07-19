import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ficha-consulta',
  templateUrl: './ficha-consulta.component.html',
  styleUrls: ['./ficha-consulta.component.css']
})
export class FichaConsultaComponent implements OnInit {
  consulta:any;
areaconsulta:string;
registodoenca:string;
motivoconsulta:string;
diagnostico:string;
ambulatorio:string;
internamento:string;
tratamento:string;
datahora:string
  constructor() { }

  ngOnInit() {
  }

 
  fichaConsulta(){

    this.consulta= {
  
      areaconsulta:this.areaconsulta,
      registodoenca:this.registodoenca,
      motivoconsulta:this.motivoconsulta,
      dignostico:this.diagnostico,
      ambulatorio:this.ambulatorio,
      internamento:this.internamento,
      tratamento:this.tratamento,
      datahora:this.datahora
    }
    console.log(this.consulta)
   
  }

}
