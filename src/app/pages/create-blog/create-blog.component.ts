import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Blog service
import { BlogService } from '../../service/blog.service';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { Blog } from '../../model/Blog';

@Component({
  selector: 'app-create-blog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss',
})
export class CreateBlogComponent {
  
  blogService: BlogService = inject(BlogService);

  blogForm: FormGroup;
  isVisible: boolean = true;

  constructor(private fb: FormBuilder) {
    // Initialize the form
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: [
        'https://via.placeholder.com/300x180?text=Angular+Routing',
        Validators.required,
      ],
      visible: [true, Validators.required],
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      console.log('New Blog:', this.blogForm.value);

      // Simulate saving the blog
      const newBlog: Blog = {
        id: Date.now(),
        title: this.blogForm.value.title,
        content: this.blogForm.value.content,
        image: this.blogForm.value.image || '',
        visible: this.blogForm.value.visible || false,
      };

      this.blogService.createBlog(newBlog);
      alert('Blog created successfully!');
      this.blogForm.reset();
    }
  }
}
