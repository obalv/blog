import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {ConcordanceComponent} from './concordance/concordance.component';

@NgModule({
  declarations: [NavbarComponent, ConcordanceComponent],
  exports: [NavbarComponent, ConcordanceComponent],
})
export class SharedModule {
}
