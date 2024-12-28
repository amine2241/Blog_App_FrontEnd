import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.interface';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      @if (post.imageUrl) {
        <img [src]="post.imageUrl" [alt]="post.title" class="w-full h-48 object-cover"/>
      }

      @if (post.videoUrl) {
        <div class="aspect-video">
          <iframe
            [src]="post.videoUrl"
            class="w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      }

      <div class="p-4">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-600 mb-4">{{ post.description }}</p>

        <div class="flex items-center gap-2 text-sm text-gray-500">
          @if (post.courseId) {
            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded ">
              Course: {{ post.courseId }}
            </span>
          }

          @if (post.conferenceId) {
            <span class="bg-green-100 text-green-800 px-2 py-1 rounded">
              Conference: {{ post.conferenceId }}
            </span>
          }

          <span class="ml-auto">
            {{ post.isPublic ? '🌎 Public' : '🔒 Private' }}
          </span>
        </div>
      </div>
    </div>
  `
})
export class PostCardComponent {
  @Input({ required: true }) post!: Post;
}
