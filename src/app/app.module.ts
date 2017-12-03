import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {PostModule} from './post/post.module';
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';

import {PostService} from './post/post.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PostModule,
    SharedModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
