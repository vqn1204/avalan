import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  getPostsByUserId(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.url).pipe(
      map((posts) => {
        return posts.filter((post) => post.userId === id);
      })
    );
  }
}
