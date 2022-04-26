import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
