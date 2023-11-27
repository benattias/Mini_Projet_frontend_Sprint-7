import { Component , OnInit} from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';
import { Image } from '../model/image.model';
@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})

export class JoueursComponent implements OnInit  {
  joueurs? : Joueur[]; 
  apiurl:string='http://localhost:8080/joueurs/api';
constructor(private joueurService: JoueurService,public authService: AuthService ) {
/*this.joueurs = joueurService.listeJoueurs();*/
}
ngOnInit(): void {

    this.chargerJoueurs();
    
    
}

/*chargerJoueurs(){
  this.joueurService.listeJoueur().subscribe(js => {
    this.joueurs = js;
    this.joueurs.forEach((j) => {
    this.joueurService.loadImage(j.image.idImage)
    .subscribe((img: Image) => {
    j.imageStr = 'data:' + img.type + ';base64,' + img.image;
    });
    });
    });
    
}*/
/*chargerJoueurs(){
  this.joueurService.listeJoueur().subscribe(js => {
  this.joueurs = js;
  this.joueurs.forEach((j) => {
  j.imageStr = 'data:' + j.images[0].type + ';base64,' +
  j.images[0].image;
  });
  });
  }*/
  chargerJoueurs(){
    this.joueurService.listeJoueur().subscribe(js => {
    this.joueurs = js;
    });
    }
    
supprimerJoueur(j: Joueur)
{
  
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.joueurService.supprimerJoueur(j.idJoueur!).subscribe(() => {
    console.log("produit supprimé");
    this.chargerJoueurs();
    });
  

}}