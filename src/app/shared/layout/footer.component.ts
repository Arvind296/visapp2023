import { Component } from '@angular/core';
import { CommonService } from 'src/app/core';
/* import { version } from '../../../'; */
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  version='';
  constructor(public commonService: CommonService) {
    this.version=environment.version
  }
 // today: Date = Date.now();

}
