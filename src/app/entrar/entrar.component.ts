import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe(res => console.log(res.id));

   }

  ngOnInit() {
  }
sendMeEntrar(){
  this.router.navigate([''])
}
}
