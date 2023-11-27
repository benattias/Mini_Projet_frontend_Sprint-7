
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {


  user = new User();
  err: String = '';

  constructor(private authService: AuthService,
    private router: Router,private userService: UserService) { }

    
    public onLoggedIn(user: User) {
      this.user = user;
      this.userService.getUserByEmail(user.username).subscribe({
        next: (_user: User) => {
          if (!_user.enabled) {
            this.err ='Account may not be enabled. verify your email inbox you may find a verification mail';
            setTimeout(() => {
              this.router.navigate(['/verification', { username: user.username }]);
            }, 2500);
            return;
          }
          this.authService.login(this.user).subscribe({
            next: (data) => {
              let jwtToken = data.headers.get('Authorization')!;
              this.authService.saveToken(jwtToken);
              localStorage.setItem('verifiedLogin', 'true');
              localStorage.setItem('loggedUser', user.username);
              this.router.navigate(['/']);
            },
            error: (err: any) => {
              console.log(err);
              this.err = 'Wrong email or password';
            },
          });
        },
        error: (err: any) => {
          console.log(err);
          this.err = 'Something went very wrong .';
        },
      });
    }


}