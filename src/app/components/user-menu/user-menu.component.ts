import { Component, Input, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  template: `
    <div>
      <button mat-button [matMenuTriggerFor]="menu" class="username">
        Hi, {{ loggedUser?.username }}
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Profile</button>
        <button mat-menu-item (click)="logout()">Logout</button>
      </mat-menu>
    </div>
  `,
  styleUrl: './user-menu.component.css',
})

export class UserMenuComponent {
  @Input() loggedUser: User | undefined = undefined;

  userService: UserService = inject(UserService);

  constructor (private router: Router) {

  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
