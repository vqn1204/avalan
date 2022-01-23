import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/api/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postsService: PostsService) {}
  posts$: Observable<Post[]> = this.getPosts();
  ngOnInit(): void {}

  getPosts(): Observable<Post[]> {
    return this.postsService.getPosts();
  }
}
