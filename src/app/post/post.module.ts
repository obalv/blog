import {NgModule} from '@angular/core';

import {PostComponent} from './post.component';
import {SharedModule} from '../shared/shared.module';
import {DetailComponent} from './detail/detail.component';
import {FooterComponent} from './footer/footer.component';

import {PostService} from './post.service';

@NgModule({
  imports: [SharedModule],
  exports: [SharedModule, PostComponent, DetailComponent, FooterComponent],
  declarations: [PostComponent, DetailComponent, FooterComponent],
  providers: [PostService],
})
export class PostModule {
}
