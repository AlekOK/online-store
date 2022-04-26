import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-orders-admin',
  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
