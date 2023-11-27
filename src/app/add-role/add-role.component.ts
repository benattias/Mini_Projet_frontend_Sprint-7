import { Component } from '@angular/core';
import { Role } from '../model/role.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent {
  newRole = new Role();
  constructor(private userService: UserService,private router :Router) { }
  addrole(){
    this.userService.ajouterRole(this.newRole)
.subscribe(Role => {
console.log(Role);
this.router.navigate(['liste-role']);
});

  }
}