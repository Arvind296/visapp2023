import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { TranslateModule, TranslateLoader, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
 import { Ng2SmartTableModule } from 'ngx-smart-table'; 
 import { NgSelectModule } from '@ng-select/ng-select';
 

 import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need


 import { ExportAsModule } from 'ngx-export-as';

import { Ng2CompleterModule } from "ng2-completer";
import { ListErrorsComponent } from './list-errors.component';
import { SelectItemPipe } from './pipe';
import { ShowAuthedDirective } from './show-authed.directive';
import { PrimeModule } from './primng.module';
import { MaterialModule } from './material.module';
import { CheckboxComponent } from './checkBox';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,NgSelectModule,ExportAsModule,
    FormsModule,MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,PrimeModule,
    RouterModule,  
     ToastrModule.forRoot(),
     Ng2SmartTableModule,
     Ng2CompleterModule,AmazingTimePickerModule,
    Ng4LoadingSpinnerModule.forRoot(),
    TranslateModule
  ],
  declarations: [
    SelectItemPipe,
    ListErrorsComponent,CheckboxComponent,
    ShowAuthedDirective
  ],
  entryComponents: [CheckboxComponent],
  exports: [
    SelectItemPipe,
    CommonModule,MaterialModule,
    Ng2SmartTableModule,PrimeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,ExportAsModule,
    ListErrorsComponent,
    Ng2CompleterModule,CheckboxComponent,
    ShowAuthedDirective, 
     ToastrModule,
     Ng4LoadingSpinnerModule,
    TranslateModule,NgSelectModule,AmazingTimePickerModule
  ]
})
export class SharedModule {}
