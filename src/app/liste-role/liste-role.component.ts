import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Role } from '../model/role.model';

@Component({
  selector: 'app-liste-role',
  templateUrl: './liste-role.component.html',
  styleUrls: ['./liste-role.component.css']
})
export class ListeRoleComponent implements OnInit{
  constructor(private userService:UserService ) {

  }
  roles!:Role[];
  ngOnInit(): void {
    this.chargerRoles();
  }
  chargerRoles(){
    this.userService.listeRole().subscribe(role => {
    
    this.roles = role;
    }); 
    }
    supprimerRole(p: Role)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.userService.supprimerRole(p.role_id).subscribe(() => {
    console.log("role supprimé");
    this.chargerRoles();
    });
    } 
}