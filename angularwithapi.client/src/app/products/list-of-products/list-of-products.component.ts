import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrl: './list-of-products.component.css'
})
export class ListOfProductsComponent {

  @Input() Products?: Product[] | null = []

  @Output() ProductSelected = new EventEmitter<Product>();



  selectProduct(selectedProduct: Product) {

    this.ProductSelected.emit(selectedProduct);
  }
}
