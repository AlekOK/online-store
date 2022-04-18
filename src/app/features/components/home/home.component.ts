import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  category: any = [
    {title: 'Grocery',
    description: ['cereals', 'flour', 'sugar', 'pasta', 'mixes'],
    imageUrl: './assets/catalog-img/grocery.jpg'},
    {title: 'Dairy',
    description: ['cheeses', 'eggs', 'milk', 'yogurt', 'butter'],
    imageUrl: './assets/catalog-img/diary.jpg'},
    {title: 'Beverages',
    description: ['coffee', 'tea', 'juice', 'soda'],
    imageUrl: './assets/catalog-img/beverages.jpg'},
    {title: 'Bakery',
    description: ['sandwich loaves', 'dinner rolls', 'tortillas', 'bagels'],
    imageUrl: './assets/catalog-img/bakery.jpg'},
    {title: 'Frozen Foods',
    description: ['waffles', 'vegetables', 'individual meals', 'ice cream'],
    imageUrl: './assets/catalog-img/frozenfood.jpg'},
    {title: 'Meat',
    description: ['lunch meat', 'poultry', 'beef', 'pork'],
    imageUrl: './assets/catalog-img/meat.jpg'},
    {title: 'Other',
    description: ['baby items', 'pet items', 'batteries', 'greeting cards'],
    imageUrl: './assets/catalog-img/food.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
