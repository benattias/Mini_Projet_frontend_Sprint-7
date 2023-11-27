import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-listeuser',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeuserComponent implements OnInit{
  users!:User[];
  constructor(private userService:UserService ) {

  }
  ngOnInit(): void {
    return this.chargerUsers();
  }
  chargerUsers(){
    this.userService.listeUser().subscribe(user => {
    
    this.users = user;
    }); 
    }
    supprimerUser(p: User)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.userService.supprimerUser(p.user_id).subscribe(() => {
  console.log("user supprimé");
  this.chargerUsers();
  });
  } 
   maskPassword(password: string): string {
    const mask = '●';
    return password.replace(/./g, mask);
  }

}