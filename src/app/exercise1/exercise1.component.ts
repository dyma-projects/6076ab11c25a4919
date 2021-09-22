import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public attribut1: string = "attribut1";

    attribut2 = {
      type: "date"
    };

  public attribut3: string = "attribut3";

  

  changeAttribut2(value:string){
    this.attribut2.type = value;
  }
 

}
