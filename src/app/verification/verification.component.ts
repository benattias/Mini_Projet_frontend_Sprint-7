import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {

  verificationCode!: string; 
  username!: string;
  constructor(private authService: UserService, private  routerr : ActivatedRoute, private router: Router) {
    this.username=this.routerr.snapshot.paramMap.get('username')!;
    console.log(this.routerr.snapshot.paramMap.get('username'))
  }

  activateUser(username: string, verificationCode: string) {
    this.authService.activateUser(username, verificationCode).subscribe(
      (user) => {
        console.log('User activated successfully:', user);
        this.router.navigate(['/login']);
      },
      (error) => {
        
        console.error('User activation failed:', error);
      }
    );
  }

}