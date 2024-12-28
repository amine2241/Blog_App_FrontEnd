import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.interface';
import { PostCardComponent } from '../post-form/post-card.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PostCardComponent],
  template: `
    <div class="container mx-auto p-4">
      <div class="mb-6">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (ngModelChange)="filterPosts()"
          placeholder="Search posts..."
          class="p-2 border rounded w-full"
        />

        <div class="flex gap-4 mt-4">
          <select
            [(ngModel)]="selectedCourse"
            (ngModelChange)="filterPosts()"
            class="p-2 border rounded flex pr-8"
          >
            <option value="">All Courses</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
          </select>

          <select
            [(ngModel)]="selectedConference"
            (ngModelChange)="filterPosts()"
            class="p-2 border rounded pr-8"
          >
            <option value="">All Conferences</option>
            <option value="conf1">Conference 1</option>
            <option value="conf2">Conference 2</option>
          </select>

          <select
            [(ngModel)]="visibility"
            (ngModelChange)="filterPosts()"
            class="p-2 border rounded pr-8"
          >
            <option value="">All Posts</option>
            <option value="public">Public Only</option>
            <option value="private">Private Only</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (post of filteredPosts$ | async; track post.id) {
          <app-post-card [post]="post" />
        }
      </div>
    </div>
  `
})

export class PostListComponent implements OnInit {
  
  searchTerm = '';
  selectedCourse = '';
  selectedConference = '';
  visibility = '';
  filteredPosts$;

  constructor(private postService: PostService) {
    this.filteredPosts$ = this.postService.getPosts();
  }

  ngOnInit() {
    this.filterPosts();
  }

  filterPosts() {
    this.filteredPosts$ = this.postService.filterPosts({
      courseId: this.selectedCourse || undefined,
      conferenceId: this.selectedConference || undefined,
      isPublic: this.visibility === 'public' ? true :
                this.visibility === 'private' ? false : undefined,
      searchTerm: this.searchTerm
    });
  }
}
