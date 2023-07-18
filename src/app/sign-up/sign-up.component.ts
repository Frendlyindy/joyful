import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users.model';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  user: Users = {
    id: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  onSubmit() {
    // Call the service to save the user data to the database
    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('User added successfully', response);
        this.router.navigate(['/home'], { relativeTo: this.route });
        this.authService.setLoggedIn(true);
      },
      (error) => {
        console.error('Error adding user', error);
        // Handle errors appropriately, such as showing an error message to the user
      }
    );
  }
}
