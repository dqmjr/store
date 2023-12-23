import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {

  @Output() columnCountChange = new EventEmitter<number>;

  sort = 'desc'
  itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string) {
    this.sort = newSort
  }

  onCountUpdated(itemCount: number) {
    this.itemsShowCount = itemCount
  }
  onColumnsUpdated (colsNum: number) {
    this.columnCountChange.emit(colsNum)
  }
}
