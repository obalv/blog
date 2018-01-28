import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {ConcordanceComponent} from './concordance/concordance.component';

@NgModule({
  declarations: [NavbarComponent, ConcordanceComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, ConcordanceComponent],
})
export class SharedModule {
}
