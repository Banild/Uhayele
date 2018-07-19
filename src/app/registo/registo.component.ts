import { Component, OnInit } from '@angular/core';
import { FormsModule,} from '@angular/forms';
import { NumberSymbol } from '@angular/common';
import { FileDetector } from 'selenium-webdriver/remote';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {
  registo: any;
nome:string;
email:string;
nrmedicos:NumberSymbol;
especialidade:string;
hospital:string;
datanascimento:number;
morada:string;
feminino:string;
masculino:string;
fotografia:FileDetector;
utilizador:string;
senha:string;
consenha:Number;
selectedValue;
 


  constructor(public http: HttpClient) { }

  ngOnInit() {
this.selectedValue=1;
  }
  
gravarRegistos(){

 
this.registo={
  tipoUtilizador:this.selectedValue,
  nome:this.nome,
  email:this.email,
  nrmedicos:this.nrmedicos,
  especialidade:this.especialidade,
  hospital:this.hospital,
  datanascimento: this.datanascimento,
  morada: this.morada,
  feminino: this.feminino,
  masculino: this.masculino,
  fotografia: this.fotografia,
  utilizador: this.utilizador,
  senha: this.senha,
  consenha: this.consenha

}


this.http.post("http://okuscience.com/uhayele/insert_tabl_gravarRegistos.php", this.registo).subscribe(
  dados =>  { 
    console.log(dados);
    this.registo = dados;
},

error => console.log(error)
);




console.log(this.registo)

}



}
