import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  cart: any = [];

  productList: any = [
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 20},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 7},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 80},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 34},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 9},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 42},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 60},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 6},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 5},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 3},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 4},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 40},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 400},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 65},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 43},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 10},
    {title: 'product',
    id: Math.floor(Math.random() * 1000),
    description: ['This is the best product for ...s'],
    imageUrl: './assets/img/not-photo.png',
    price: 100}
  ]


  constructor() { }

  getProductList(): any{
    const SubscribeObservable = new Observable((observer) => {
      observer.next(this.productList);
    });
    return SubscribeObservable;
  }

  PushInCart(card: any) {

    this.cart = [...this.cart, card];
    return this.cart;
  }

  getCartList() {
    const SubscribeObservable = new Observable((observer) => {
      observer.next(this.cart);
    });
    return SubscribeObservable;
  }
}
