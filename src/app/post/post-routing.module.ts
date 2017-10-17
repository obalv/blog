import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const PostRoutes: Routes = [
    { path: '', component: TimelineComponent },
    { path: ':type', component: ConcordanceComponent },
    { path: ':type/:id', component: PostComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(PostRoutes)
    ],
    exports: [RouterModule]
})
export class FeatureModule { }