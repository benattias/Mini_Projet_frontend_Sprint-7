import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
  styleUrls: ['./liste-equipes.component.css']
})
export class ListeEquipesComponent implements OnInit {
  equipes! : Equipe[];
  updatedEq:Equipe = {"idEq":0,"nomEq":""};
  ajout:boolean=true;
  constructor(private joueurService : JoueurService) { }
  ngOnInit(): void {
    this.chargerEquipes();
  }
  equipeUpdated(cat:Equipe){
    console.log("Eq updated event",cat);
    this.joueurService.ajouterEquipe(cat).
     subscribe( ()=> this.chargerEquipes());
    }
    chargerEquipes(){
      this.joueurService.listeEquipes().
      subscribe(cats => {this.equipes = cats._embedded.equipes;
      console.log(cats);
      });
      }
    updateEq(cat:Equipe) {
        this.updatedEq=cat;
        this.ajout=false;
        
        }
}