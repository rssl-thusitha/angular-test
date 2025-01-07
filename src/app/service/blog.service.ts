import { Injectable } from '@angular/core';
import { Blog } from '../model/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  protected blogList: Blog[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      content:
        'Angular is a powerful framework for building dynamic web applications. Learn the basics to get started.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Intro',
      visible: true,
    },
    {
      id: 2,
      title: 'Understanding Angular Components',
      content:
        'Dive deeper into Angular components and how they help structure your application effectively.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Components',
      visible: true,
    },
    {
      id: 3,
      title: 'Top 5 Angular Features',
      content:
        'Explore the top features of Angular that make it one of the best frameworks for developers.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Features',
      visible: true,
    },
    {
      id: 4,
      title: 'Building Reusable Angular Services',
      content:
        'Learn how to create reusable services in Angular for better application maintainability.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Services',
      visible: true,
    },
    {
      id: 5,
      title: 'Working with Angular Forms',
      content: 'Master Angular forms and how to handle user input efficiently.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Forms',
      visible: true,
    },
    {
      id: 6,
      title: 'Routing in Angular',
      content:
        'Understand Angular’s powerful routing system to create single-page applications.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Routing',
      visible: true,
    },
    {
      id: 7,
      title: 'State Management in Angular',
      content:
        'Learn about state management techniques in Angular and how to use NgRx for better app architecture.',
      image:
        'https://via.placeholder.com/300x180?text=Angular+State+Management',
      visible: true,
    },
    {
      id: 8,
      title: 'Optimizing Angular Applications',
      content:
        'Boost your application’s performance with these Angular optimization tips and tricks.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Optimization',
      visible: true,
    },
    {
      id: 9,
      title: 'Understanding Dependency Injection in Angular',
      content:
        'Learn how Angular’s dependency injection system works and how to use it effectively.',
      image: 'https://via.placeholder.com/300x180?text=Angular+DI',
      visible: true,
    },
    {
      id: 10,
      title: 'Debugging Angular Applications',
      content:
        'Get familiar with tools and techniques to debug your Angular applications efficiently.',
      image: 'https://via.placeholder.com/300x180?text=Angular+Debugging',
      visible: true,
    },
  ];

  constructor() {}

  getAllblogs(): Blog[] {
    return this.blogList;
  }

  getBlogById(blogId: number): Blog | undefined {
    return this.blogList.find((blog) => blog.id === blogId);
  }

  createBlog(blog: Blog): void {
    this.blogList.push(blog);
  } 
}
