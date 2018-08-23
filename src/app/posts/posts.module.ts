import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {EditorComponent} from './editor/editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostsComponent, PostComponent, EditorComponent],
  exports: [PostsComponent, PostComponent, EditorComponent]
})
export class PostsModule {
}
