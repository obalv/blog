import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const rootRouter: Routes = [
    { path: '', redirectTo: '/post', pathMatch: 'full' },
    { path: 'post', loadChildren: 'app/post/post.module#PostModule' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboarModule' },
    { path: '**', loadChildren: 'app/error/error.module#ErrorModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(rootRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule {}