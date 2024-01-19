import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartModel} from "../models/cart.model";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []})
  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartModel) {
    const items = [...this.cart.value.items]

    const itemInCart = items.find((_item) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity += 1
    }
    else {
      items.push(item)
    }

    this.cart.next({items: items});
    this._snackBar.open(
        '1 item added to cart',
        'OK',
        {
          duration: 3000
        });
  }
  getTotal(items: Array<CartModel>):number {
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0)
  }

  clearCart() {
    this.cart.next({items: []})
    this._snackBar.open(
        'Cart is cleared.',
        'OK',
        {
          duration: 3000
        }
    )
  }

}
