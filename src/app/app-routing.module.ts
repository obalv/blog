import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const rootRouter: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboarModule'},
  {path: '**', loadChildren: 'app/error/error.module#ErrorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(rootRouter, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
