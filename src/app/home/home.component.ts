import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  redirectToLogin() {
    this.router.navigate(['/loggin'], { relativeTo: this.route });
  }
  logout() {
    this.isLoggedIn = false;
  }
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  newUser() {
    this.router.navigate(['/signup'], { relativeTo: this.route });
  }
  editUser() {
    this.router.navigate(['/edit-user'], { relativeTo: this.route });
  }
  deleteUser() {
    this.router.navigate(['/delete-user'], { relativeTo: this.route });
  }
}
