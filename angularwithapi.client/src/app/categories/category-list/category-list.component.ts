import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../../Services/product-category.service';
import { ProductCategory } from '../../Models/produc-category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})

export class CategoryListComponent implements OnInit {

  catList: ProductCategory[] = [];

  constructor(private catService: ProductCategoryService) {

  }


  ngOnInit(): void {
    this.catService.getAll().subscribe({
      next: (data) => {

        this.catList = data;


      }
    })
  }


}
