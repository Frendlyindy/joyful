import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent {
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
          this.authService.setLoggedIn(true); // Update login state to true
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
