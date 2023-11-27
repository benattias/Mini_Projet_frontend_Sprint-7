import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { Role } from '../model/role.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  roles!:Role[];
  currentuser = new User();
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,private router :Router) { }
  ngOnInit(): void {
    this.userService.listeRole()
    .subscribe(roles => {
      this.roles = roles;
      this.userService.consulterUser(this.activatedRoute.snapshot.params['id'])
        .subscribe(user => {
          this.currentuser = user;
          this.roles.forEach(role => {
            role.checked = user.roles.some(userRole => userRole.role_id === role.role_id);
          });
        });
    });
   this.chargerRoles();
  }
  chargerRoles(){
    this.userService.listeRole().subscribe(prods => {
    this.roles = prods;
    });
    }
  updateuser(){
  
        // Ajouter les rôles cochés à l'utilisateur
  this.currentuser.roles = this.roles.filter(role => role.checked);
  
  // Supprimer les rôles non cochés de l'utilisateur
  this.currentuser.roles = this.currentuser.roles.filter(role => role.checked);
  
  this.userService.updateUser(this.currentuser).subscribe(
    res => {
      this.router.navigate(['liste_user']);
    },
    err => {
      console.log(err);
    }
  );
}
  }