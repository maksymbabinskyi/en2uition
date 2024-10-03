import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  activeItem;
  activeCategory;
  activeSubcategory;
  loading = new BehaviorSubject(false);

  constructor() {
  }

  setActiveItem(item: any) {
    this.activeItem = this.activeItem !== item ? item : null;
    this.activeCategory = null;
    this.activeSubcategory = null;
  }

  setActiveCategory(category: any) {
    this.activeCategory = this.activeCategory !== category ? category : null;
    this.activeSubcategory = null;
  }

  setActiveSubcategory(subcategory: any) {
    this.activeSubcategory = this.activeSubcategory !== subcategory ? subcategory : null;
  }
}
