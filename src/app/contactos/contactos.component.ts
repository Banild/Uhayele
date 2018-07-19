import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';



@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router:Router) { 
    //this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
  }
  sendMeHome(){
    this.router.navigate([''])
  }

}
