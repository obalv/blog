import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ConcordanceComponent} from './concordance.component';
import {PostComponent} from './post.component';

const PostRoutes: Routes = [
  {path: '', component: ConcordanceComponent},
  {path: ':id', component: PostComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(PostRoutes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
