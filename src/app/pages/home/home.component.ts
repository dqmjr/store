import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350}
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT [this.cols]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT [this.cols]
  }

  onChangeCategory(category: string) {
    this.category = category
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
