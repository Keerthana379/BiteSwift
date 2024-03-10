import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {
    if (!this.userService.currentUser.token) {
      this.router.navigate(['/login']);
    }
  }
}
