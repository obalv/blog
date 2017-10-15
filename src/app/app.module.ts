import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DashComponent} from './dashboard/dashboard.component';
import {PostComponent} from './post/post.component';

const rootRouter = [
  {path: '', redirectTo: '/post', pathMatch: 'full'},
  {path:'/post',component:PostComponent},
  {path: '/dashboard',component:DashComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
