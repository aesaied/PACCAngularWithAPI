import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../Models/produc-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<ProductCategory[]> {

    return this.http.get<ProductCategory[]>('/api/ProductCategories');
  }

  getById(id: number): Observable<ProductCategory> {

    // alert('/api/ProductCategories/' + id);
    return this.http.get<ProductCategory>('/api/ProductCategories/' + id);
  }
}
