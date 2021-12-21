import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  price:number = 500;
  disPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.disPrice = this.price - 50;
  }

}
