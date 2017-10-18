import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const DashBoardRoutes: Routes = [
  {path: '', component: ManagerCoponent},
  {path: 'newstory', component: EditorComponent},
  {path: 'stories', component: PostListComponent},
  {path: 'manage', component: ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule]
})
export class DashBoardModule {
}
