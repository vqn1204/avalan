import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/services/api/posts.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  posts$: Observable<Post[]>;

  ngOnInit(): void {
    const userId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.posts$ = this.getPostsByUserId(userId);
  }

  getPostsByUserId(id: number): Observable<Post[]> {
    return this.postsService.getPostsByUserId(id);
  }
}
