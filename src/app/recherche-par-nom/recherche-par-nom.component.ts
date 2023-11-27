import { Component } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {

  nomJoueur! : string;
  joueurs!: Joueur[];
  searchTerm!: string;
  allJoueurs! : Joueur[];

  constructor(private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.listeJoueur().subscribe(prods => {
    console.log(prods);
    this.joueurs = prods;
    });
    }
    onKeyUp(filterText : string){
    this.joueurs = this.allJoueurs.filter(item =>
    item.nomJoueur!.toLowerCase().includes(filterText));
    }
  /*rechercherJs(){
    this.joueurService.rechercherParNom(this.nomJoueur).
subscribe(prods => {
this.joueurs = prods;
console.log(prods)});
    
}*/}
