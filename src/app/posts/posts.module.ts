import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {EditorComponent} from './editor/editor.component';
import {RouterModule} from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule
  ],
  declarations: [PostsComponent, PostComponent, EditorComponent],
  exports: [PostsComponent, PostComponent, EditorComponent]
})
export class PostsModule {
}
