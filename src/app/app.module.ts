import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialPostsComponent } from './social-posts/social-posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SocialPostsComponent,
    SinglePostComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
