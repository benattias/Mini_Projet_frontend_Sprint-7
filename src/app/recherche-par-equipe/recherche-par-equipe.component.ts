import { Component } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { JoueursComponent } from '../joueurs/joueurs.component';

@Component({
  selector: 'app-recherche-par-equipe',
  templateUrl: './recherche-par-equipe.component.html',
  styleUrls: ['./recherche-par-equipe.component.css']
})
export class RechercheParEquipeComponent {
  joueurs! : Joueur[];
  IdEquipe! : number;
  equipes! : Equipe[];
  constructor(private joueurService : JoueurService) { }
  ngOnInit(): void {
    
      this.joueurService.listeEquipes().
      subscribe(cats => {this.equipes = cats._embedded.equipes;
      console.log(cats);
      });
      

  }

  onChange() {
    this.joueurService.rechercherParEquipe(this.IdEquipe).
      subscribe(prods =>{this.joueurs=prods});

    }


}
