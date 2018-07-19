import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissional-area',
  templateUrl: './profissional-area.component.html',
  styleUrls: ['./profissional-area.component.css']
})
export class ProfissionalAreaComponent implements OnInit {
user: any;
  constructor() { }

  ngOnInit() {
 this.user=JSON.parse(localStorage.getItem('user'))
  }

}
