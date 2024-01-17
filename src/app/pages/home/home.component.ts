import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

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

  onAddToCart($event: any) {

  }
}
