import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
