import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blog.service';
import { Blog } from '../../model/Blog';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  template: `
    <div *ngIf="blog" class="blog-details">
      <img [src]="blog.image" alt="{{ blog.title }}" class="blog-image" />
      <h1 class="blog-title">{{ blog.title }}</h1>
      <p class="blog-content">{{ blog.content }}</p>
    </div>

    <div *ngIf="!blog" class="not-found">
      <p>
        Blog not found. Please go back to the
        <a routerLink="/blogs">blog list</a>.
      </p>
    </div>
  `,
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  blogService = inject(BlogService);
  blog: Blog | undefined;

  constructor() {
    const blogId = Number(this.route.snapshot.params['id']);
    this.blog = this.blogService.getBlogById(blogId);
  }
}
