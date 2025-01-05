import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article.interface';
@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent {
  articles: Article[] = [];
  loading = true;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe({
        next: (data) => {
          this.articles = data;
          this.loading = false;
          console.log('Data mr beast:', data);
        },
        error: (error) => {
          console.error('Error:', error);
          this.loading = false;
        }
      });
  }
}
