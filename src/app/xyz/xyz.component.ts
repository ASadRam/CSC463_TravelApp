import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  numPpl:number = 0;
  price:number = 0;
  numOfTravelers:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  Cities: string[] = ['Chicago','New York','London', 'Paris', 'Tokyo', 'Singapore', 'Bangkok'];



  public Calc(): void {
    // price = this.numPple * 150;

    //this.price = 150;
    //console.log(this.price);

    this.price = this. numOfTravelers * 150;
    console.log(this.price);
  }


  public addToList(): void {
      console.log(this.numOfTravelers);
      this.price = this.numOfTravelers * 150;
  }

}
