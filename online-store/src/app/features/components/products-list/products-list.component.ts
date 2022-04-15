import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  title: any;
  productList: any;


  constructor( private route: ActivatedRoute, private featureService: FeatureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['id'];
    });

    this.getProductList();
  }

  getProductList() {
    this.featureService.getProductList().subscribe((data: any[]) => this.productList=data);
  }
}
