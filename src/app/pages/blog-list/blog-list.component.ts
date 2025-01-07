import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Blog } from '../../model/Blog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterLink, MatCardModule],
  template: `
    <div class="blog-card">
      <img [src]="blog.image" alt="{{ blog.title }}" class="blog-image" />
      <div class="blog-content">
        <h2 class="blog-title">{{ blog.title }}</h2>
        <p class="blog-author">By {{ blog.title }} on {{ blog.title }}</p>
        <p class="blog-excerpt">{{ blog.title }}</p>
        <button mat-raised-button color="primary" class="read-more" [routerLink]="['/blog-detail', blog.id]">
          Read More
        </button>
      </div>
    </div>
  `,
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent {
  @Input() blog!: Blog;
}
