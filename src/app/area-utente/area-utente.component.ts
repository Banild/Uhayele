import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-utente',
  templateUrl: './area-utente.component.html',
  styleUrls: ['./area-utente.component.css']
})
export class AreaUtenteComponent implements OnInit {
  user: any;
  constructor() { }

  ngOnInit() {
 this.user=JSON.parse(localStorage.getItem('user'))
  }

}
