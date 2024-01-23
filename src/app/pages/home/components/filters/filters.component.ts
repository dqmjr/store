import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {StoreService} from "../../../../services/store.service";
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter()

  productSubscription: Subscription | undefined
  categories: Array<Product> | undefined
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.productSubscription = this.storeService.getAllCategories()
        .subscribe((response)=> {
          this.categories = response
        })
  }

  onChangeCategory(category: Product) {
    this.showCategory.emit(category)
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription?.unsubscribe()
    }
  }
}
