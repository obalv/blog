import {NgModule} from '@angular/core';

import {PostRoutingModule} from './post-routing.module';
import {SharedModule} from '../shared/shared.module';
import {DetailComponent} from './detail/detail.component';
import {FooterComponent} from './footer/footer.component';

import {PostService} from './post.service';

@NgModule({
  imports: [PostRoutingModule, SharedModule],
  exports: [SharedModule],
  declarations: [DetailComponent, FooterComponent],
  providers: [PostService],
})
export class PostModule {
}
