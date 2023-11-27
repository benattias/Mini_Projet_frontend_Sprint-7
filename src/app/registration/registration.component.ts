import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: UserService, private router: Router) {}

  user: User = new User();
  confirmPassword!: string;
  isLoading:boolean=false;

  ngOnInit(): void {}

  register() {
    this.isLoading=true;
    const { username, email, password, confirmPassword } = this.form;
    if (password !== confirmPassword) {
      this.errorMessage = 'Password and Confirm Password do not match';
      this.isSignUpFailed = true;
      

      return;
    }
    let user = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(user);
    this.authService.addUser(user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/verification', { username: user.username }]);
      },
      error: (err) => {
        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          
        } else {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/login']);
        }
        
      },
    });
  }

}