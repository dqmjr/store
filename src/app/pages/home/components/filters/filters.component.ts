import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  @Output() changeCategory = new EventEmitter()

  categories: string[] = ['shoes', 'sports']
  constructor() { }

  ngOnInit(): void {
  }
  onChangeCategory(category: string) {
    this.changeCategory.emit(category)
  }
}
