import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  RadioButtonModule, CheckboxModule,AutoCompleteModule, DropdownModule,CalendarModule,
  DialogModule

} from 'primeng/primeng';

@NgModule({
  imports: [ 
    RadioButtonModule,AutoCompleteModule, CheckboxModule,DropdownModule,CalendarModule,DialogModule
  ],
  exports: [
    RadioButtonModule, AutoCompleteModule,CheckboxModule,DropdownModule,CalendarModule,DialogModule
  ]    
})

export class PrimeModule {}