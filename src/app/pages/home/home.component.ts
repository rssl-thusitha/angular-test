import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../service/blog.service';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { Blog } from '../../model/Blog';

@Component({
  selector: 'app-home',
  imports: [CommonModule, BlogListComponent],
  template: `
    <section>
      <div class="blog-container">
        <div *ngFor="let blog of blogList">
          <app-blog-list [blog]="blog"></app-blog-list>
        </div>
      </div>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  blogList: Blog[] = [];
  blogService: BlogService = inject(BlogService);

  constructor() {
    this.blogList = this.blogService.getAllblogs();
  }
}
