import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCardComponent } from './components/posts/post-card/post-card.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [UsersComponent, UserCardComponent, PostsComponent, PostCardComponent, CommentsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
