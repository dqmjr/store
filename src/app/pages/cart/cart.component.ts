import { Component, OnInit } from '@angular/core';
import {Cart, CartModel} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [
      {
          id: 1,
          product: 'https://via.placeholder.com/150',
          name: 'snickers',
          price: 150,
          quantity: 1
      },
      {
          id: 2,
          product: 'https://via.placeholder.com/150',
          name: 'snickers',
          price: 150,
          quantity: 2
      }
    ]
  }

  dataSource: Array<CartModel> = []
  displayedColumns: Array<string> = [
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
  ]
  constructor(private cartService: CartService) { }

  ngOnInit(): void
  {
    this.dataSource = this.cart.items
  }

    getTotal(items: Array<CartModel>):number {
        return this.cartService.getTotal(items)
    }
}
