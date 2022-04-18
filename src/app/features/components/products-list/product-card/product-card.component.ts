import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FeatureService } from 'src/app/features/services/feature.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() card: any;

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
  }

  onPushInCart(card: any): any {
    this.featureService.PushInCart(card);
  }
}
