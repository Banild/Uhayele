import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RouterModule, Routes } from '@angular/router';
import { AlertPromise } from '../../../node_modules/@types/selenium-webdriver';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  acesso: any;
  utilizador: string;
  senhaentrar: string;
  lembrar: string;
dadosServer: any;
  private publicDealsUrl = "https://okuscience.com/uhayele/select_tabl_gravarRegistos.php";

  constructor(private http:HttpClient, private router: Router) {

  }

  ngOnInit() {
  }

 entrarNovo(){
 
  this.acesso = {
    utilizador:this.utilizador,
    senha:this.senhaentrar

  }
this.http.post(this.publicDealsUrl, this.acesso).subscribe(
  dados =>  { 
    this.dadosServer=dados;
    console.log(dados);
    var user='0';
    try
    {
      user =this.dadosServer.tabl_registo[0].tipoUtilizador;
      localStorage.setItem('user',JSON.stringify(this.dadosServer.tabl_registo[0]))
    }
    catch(x){

      user='0';
    }
    if (user!='0'){
      if(user =='1'){
        this.router.navigate(['prof'])
        
      }
      else{
        this.router.navigate(['areautente'])
      }
      
    }else{

      alert("Utilizador ou senha errada")
    }
},

error => console.log(error)
);

 }
  
  login() {

    this.acesso = {
      utilizador:this.utilizador,
      senha:this.senhaentrar
  
    }

    console.log(this.acesso)
     this.http.post(this.publicDealsUrl, this.acesso).pipe(
      map(this.extrairDados), catchError(this.handleError)
    );
    }
    private extrairDados(res: Response) {
      const body = res;
      console.log(body)
      return body || { };
      }
      // Implement a method to handle errors if any
private handleError(err: HttpErrorResponse | any) {
  console.error('An error occurred', err);
  return Observable.throw(err.message || err);
}


}

