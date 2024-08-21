import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../../Models/produc-category';
import { ProductCategoryService } from '../../Services/product-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrl: './category-view.component.css'
})
export class CategoryViewComponent implements OnInit {

  currentCategory?: ProductCategory;


  constructor(private catService: ProductCategoryService, private rout: ActivatedRoute, private router: Router) {


  }

  ShowSelectedProduct(sProduct: Product) {

    alert(JSON.stringify(sProduct));
  }

  ngOnInit(): void {

    this.rout.params.subscribe(params => {

      var id = params['id'];

      if (id < 1) {

        this.router.navigate(['/categories']);

      }

      this.catService.getById(id).subscribe({
        next: (data) => {

          this.currentCategory = data;

        },

        error: (ex) => {

          alert('Product not found!');
          this.router.navigate(['/categories']);
        }

      })

    });

  }

}
