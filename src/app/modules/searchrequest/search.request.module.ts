
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AuthGuard } from '../../core';
import { SharedModule } from '../../shared';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { TranslateModule } from '@ngx-translate/core';
import { SearchRequestComponent } from './search.request.component';
import { SearchRequestRoutingModule } from './search.request-routing.module';
import { EditSearchComponent } from './EditSearchRequest/edit-search.component';
import {VisitDialogeComponent} from './../searchrequest/EditSearchRequest/visit.dialoge.component';
import {VisitAllDataComponent} from './EditSearchRequest/visit.allData.component';



@NgModule({
  imports: [SharedModule, SearchRequestRoutingModule,TranslateModule,Ng4LoadingSpinnerModule.forRoot()],
  declarations: [SearchRequestComponent, EditSearchComponent , VisitDialogeComponent , VisitAllDataComponent],
  providers: [],
  entryComponents: [VisitDialogeComponent]
})
export class SearchRequestModule {}
