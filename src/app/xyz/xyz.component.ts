import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  //public numPple;
  numPpl:number = 0;
  price:number = 0;

  constructor() { }

  ngOnInit(): void {}


  public Calc():void{
    //price = this.numPple * 150;

    this.price = this.numPpl * 150;
  }




}
