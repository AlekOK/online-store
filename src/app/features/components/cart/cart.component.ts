import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {

  emptyCart: boolean = true;
  displayedColumns: string[] = ['imageUrl', 'title', 'description', 'price'];
  cartList: any = [];
  dataSource: any;

  constructor(private featureService: FeatureService) { }

  getTotalCost() {
    return this.cartList.map((t: any)=> t.price).reduce((acc: any, value: any) => acc + value, 0);
  }

  ngOnInit(): void {
    this.getCartList();
  }

  getCartList() {
    this.featureService.getCartList().subscribe((data: any) => {
      this.cartList = data;
    });
    console.log(this.cartList);
    this.dataSource = this.cartList;
    this.emptyCart = this.cartList.length ? false : true;
  }
}
