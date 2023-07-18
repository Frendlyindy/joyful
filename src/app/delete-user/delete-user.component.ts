import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent {
  id: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  login() {
    this.usersService.getOneUser(this.password).subscribe(
      (response: any) => {
        if (response.password === this.password) {
          console.log('Login successful!');
          this.authService.setLoggedIn(false); // Update login state to true
          this.usersService.deleteUser(response.password).subscribe();
          this.router.navigate(['/home'], { relativeTo: this.route });
        } else {
          console.error('Login failed. Invalid credentials.');
        }
      },
      (error) => {
        console.error('Error during login:', error);
      }
    );
  }
}
