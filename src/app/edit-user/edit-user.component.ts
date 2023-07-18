import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userPassword: string; // The ID of the user to edit
  user: Users = {
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Get the user ID from the route parameter
    this.route.params.subscribe((params) => {
      this.userPassword = params['password'];
      // Fetch the user data using the Password and populate the form
      this.userService.getOneUser(this.userPassword).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user', error);
          // Handle errors appropriately, such as showing an error message to the user
        }
      );
    });
  }

  onSubmit() {
    // Call the service to update the user data in the database
    this.userService.updateUser(this.userPassword, this.user).subscribe(
      (response) => {
        console.log('User updated successfully', response);
        this.router.navigate(['/home'], { relativeTo: this.route });
      },
      (error) => {
        console.error('Error updating user', error);
        // Handle errors appropriately, such as showing an error message to the user
      }
    );
  }
}
