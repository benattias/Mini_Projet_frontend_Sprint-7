import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser = new User();
  constructor(private userService: UserService,private router :Router) { }
  adduser(){
    this.userService.ajouterUser(this.newUser)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['liste_user']);
});

  }

}