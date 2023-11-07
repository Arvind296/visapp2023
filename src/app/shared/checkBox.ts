import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ngx-smart-table';


@Component({
  selector: 'app-checkbox',
  template: `

  <label class="container">
  <input type="checkbox" disabled="disabled" (click)="changeBoolean()"
  [checked]="this.checked">
  <span class="checkmark"></span>
</label>

   `,
   styleUrls: ['./checkbox.css']
})
export class CheckboxComponent implements ViewCell, OnInit {
 
  @Input() value: any;
  @Input() rowData: any;

  checked: boolean;

  constructor() { }

  ngOnInit() {
    this.checked = this.value;
  }

  changeBoolean() {
    this.checked = !this.checked;
  }

}