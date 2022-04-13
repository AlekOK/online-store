import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  title: any;

  productList: any;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['id'];
    });

    this.getProductList();
  }

  getProductList() {
    this.productList = [
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 20},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 7},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 80},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 34},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 9},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 42},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 60},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 6},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 5},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 3},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 4},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 40},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 400},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 65},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 43},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 10},
      {title: 'product',
      description: ['This is the best product for ...s'],
      imageUrl: './assets/img/not-photo.png',
      price: 100}
    ]
  }
}
