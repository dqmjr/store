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
      this.cartService.cart.subscribe((_cart: Cart) => {
          this.cart = _cart;
          this.dataSource = this.cart.items
      })

  }

    getTotal(items: Array<CartModel>):number {
        return this.cartService.getTotal(items)
    }

    onClearCart() {
        this.cartService.clearCart()
    }

    onRemoveFromCart(item: CartModel) {
        this.cartService.removeFromCart(item);
    }

    onAddQuantity(item: CartModel) {
        this.cartService.addToCart(item)
    }

    onRemoveQuantity(item: CartModel) {
        this.cartService.removeQuantity(item)
    }
}
