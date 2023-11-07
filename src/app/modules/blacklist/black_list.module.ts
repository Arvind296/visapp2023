
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';

import { TranslateModule } from '@ngx-translate/core';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { BlackListRoutingModule } from './black_list-routing.module';
import { BlackListComponent } from './black_list.component';
import { BlackListDialogeComponent } from './black_list.dialoge.component';


@NgModule({
  imports: [SharedModule,Ng4LoadingSpinnerModule.forRoot(), BlackListRoutingModule,TranslateModule],
  declarations: [BlackListComponent,BlackListDialogeComponent],
  providers: [ ],
  entryComponents: [BlackListDialogeComponent]
})
export class BlackListModule {}
