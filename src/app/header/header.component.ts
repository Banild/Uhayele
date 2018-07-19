import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 tipoUtilizador= 2;
 user: any;


  constructor() { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('user'))
  }

}
