import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../models/product.model";
import {Subscription} from "rxjs";
import {StoreService} from "../../services/store.service";

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350}
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  cols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT [this.cols]
  products: Array<Product> | undefined
  sort: string | undefined
  count: string | undefined
  productSubscription: Subscription | undefined

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  onColumnsCountChange(colsNum: number) {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT [this.cols]
  }

  onChangeCategory(category: string) {
    this.category = category
    this.getProducts()
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

  private getProducts() {
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort, this.category)
        .subscribe((_products) => this.products = _products)
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe()
    }
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString()
    this.getProducts()
  }

  onSortChange(newSort: string) {
    this.sort = newSort
    this.getProducts()
  }
}
