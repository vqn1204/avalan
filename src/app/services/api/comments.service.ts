import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Comment } from 'src/app/shared/models/comment.model';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  url: string = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getCommentsByPostId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url).pipe(
      map((comments) => {
        return comments.filter((comment) => comment.postId === id);
      })
    );
  }
}
