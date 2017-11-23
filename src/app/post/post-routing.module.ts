import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ConcordanceComponent} from '../shared/concordance/concordance.component';
import {PostComponent} from './post.component';

const PostRoutes: Routes = [
  {path: 'timeline', component: ConcordanceComponent},
  {path: 'posts/:id', component: PostComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(PostRoutes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
