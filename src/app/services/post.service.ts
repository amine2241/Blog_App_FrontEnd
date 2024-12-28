import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsSubject = new BehaviorSubject<Post[]>([]);

  getPosts(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  filterPosts(options: {
    courseId?: string;
    conferenceId?: string;
    isPublic?: boolean;
    searchTerm?: string;
  }): Observable<Post[]> {
    return this.getPosts().pipe(
      map(posts => posts.filter(post => {
        const matchesCourse = !options.courseId || post.courseId === options.courseId;
        const matchesConference = !options.conferenceId || post.conferenceId === options.conferenceId;
        const matchesVisibility = options.isPublic === undefined || post.isPublic === options.isPublic;
        const matchesSearch = !options.searchTerm || 
          post.title.toLowerCase().includes(options.searchTerm.toLowerCase()) ||
          post.description.toLowerCase().includes(options.searchTerm.toLowerCase());
        
        return matchesCourse && matchesConference && matchesVisibility && matchesSearch;
      }))
    );
  }
}