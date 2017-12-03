import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PostComponent} from './post/post.component';
import {ConcordanceComponent} from './shared/concordance/concordance.component';
import {TimelineComponent} from './post/timeline/timeline.component';
import {DetailComponent} from './post/detail/detail.component';

const rootRouter: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {path: '', component: TimelineComponent},
      {path: ':type', component: ConcordanceComponent},
      {path: ':type/:id', component: DetailComponent}]
  },
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboarModule'},
  {path: '**', loadChildren: './shared/error/error.module#ErrorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouter, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
