import { Component } from '@angular/core';
import { Role } from '../model/role.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.css']
})
export class UpdateroleComponent {
  currentrole = new Role();
  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,private router :Router) { }
  ngOnInit(): void {
    this.userService.consulterRole(this.activatedRoute.snapshot.params['id'])
.subscribe( prod =>{ this.currentrole = prod;

} ) ;
  }
  updaterole(){
  
      this.userService
      .updateRole(this.currentrole)
      .subscribe((prod) => {
      this.router.navigate(['liste-role']);
      });
  }
}