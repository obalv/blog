import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {ConcordanceComponent} from './post/concordance.component';

@NgModule({
  declarations: [ConcordanceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ConcordanceComponent]
})
export class AppModule {
}
