import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsService } from 'src/app/services/api/comments.service';
import { Comment } from 'src/app/shared/models/comment.model';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {
  @Input() post: any;
  comments$: Observable<Comment[]>;
  showComments: boolean = false;
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {}

  getComments(id: number): void {
    this.showComments = true;
    this.comments$ = this.commentsService.getCommentsByPostId(id);
  }

  hideComments() {
    this.showComments = false;
  }
}
