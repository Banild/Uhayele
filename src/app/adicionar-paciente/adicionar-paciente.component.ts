import { Component, OnInit } from '@angular/core';
import { FileDetector } from 'selenium-webdriver/remote';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionar-paciente',
  templateUrl: './adicionar-paciente.component.html',
  styleUrls: ['./adicionar-paciente.component.css']
})
export class AdicionarPacienteComponent implements OnInit {


  paciente: any;
  fotografia: FileDetector;
  bi: number;
  nomepaciente: string;
  doenca: string;
  dataregisto: number;
  feminino: string;
  masculino: string;
  datanascimento: number;
  filiacao: string;
  telefone: number;
  morada: string;
  estadocivil: string;
  estadopaciente: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  adpaciente() {
    this.paciente = {
      bi: this.bi,
      estadocivil: this.estadocivil,
      nomepaciente: this.nomepaciente,
      doenca: this.doenca,
      dataregisto: this.dataregisto,
      feminino: this.feminino,
      masculino: this.masculino,
      datanascimento: this.datanascimento,
      filiacao: this.filiacao,
      telefone: this.telefone,
      morada: this.morada,
      estadopaciente: this.estadopaciente


     
    }
    this.http.post("https://okuscience.com/uhayele/insert_tabl_adpaciente.php", this.paciente).subscribe(
        dados =>  { 
          console.log(dados);
          this.paciente = dados;
      },
      error => console.log(error)
    );

    console.log(this.paciente)
    
  }


}
